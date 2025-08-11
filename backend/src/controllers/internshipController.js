const Internship = require('../models/Internship');

// @desc    Get all internships
// @route   GET /api/internships
// @access  Public
const getInternships = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      level,
      location,
      remote,
      company,
      search,
      sort = '-createdAt',
      featured
    } = req.query;

    // Build filter object
    const filter = { 
      isActive: true,
      applicationDeadline: { $gte: new Date() } // Only show non-expired internships
    };

    if (category) filter.category = category;
    if (level) filter.level = level;
    if (remote !== undefined) filter['location.remote'] = remote === 'true';
    if (featured !== undefined) filter.featured = featured === 'true';

    if (location) {
      filter.$or = [
        { 'location.city': { $regex: location, $options: 'i' } },
        { 'location.state': { $regex: location, $options: 'i' } },
        { 'location.country': { $regex: location, $options: 'i' } }
      ];
    }

    if (company) {
      filter['company.name'] = { $regex: company, $options: 'i' };
    }

    if (search) {
      filter.$text = { $search: search };
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get internships with pagination
    const internships = await Internship.find(filter)
      .populate('postedBy', 'name email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Internship.countDocuments(filter);

    res.json({
      success: true,
      data: internships,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get internships error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single internship
// @route   GET /api/internships/:id
// @access  Public
const getInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id)
      .populate('postedBy', 'name email avatar');

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship not found'
      });
    }

    // Increment view count
    internship.viewCount += 1;
    await internship.save();

    res.json({
      success: true,
      data: internship
    });
  } catch (error) {
    console.error('Get internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new internship
// @route   POST /api/internships
// @access  Private/Admin
const createInternship = async (req, res) => {
  try {
    const internshipData = {
      ...req.body,
      postedBy: req.user.id
    };

    const internship = await Internship.create(internshipData);

    const populatedInternship = await Internship.findById(internship._id)
      .populate('postedBy', 'name email');

    res.status(201).json({
      success: true,
      message: 'Internship created successfully',
      data: populatedInternship
    });
  } catch (error) {
    console.error('Create internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update internship
// @route   PUT /api/internships/:id
// @access  Private/Admin
const updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).populate('postedBy', 'name email');

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship not found'
      });
    }

    res.json({
      success: true,
      message: 'Internship updated successfully',
      data: internship
    });
  } catch (error) {
    console.error('Update internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete internship
// @route   DELETE /api/internships/:id
// @access  Private/Admin
const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship not found'
      });
    }

    await internship.deleteOne();

    res.json({
      success: true,
      message: 'Internship deleted successfully'
    });
  } catch (error) {
    console.error('Delete internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get featured internships
// @route   GET /api/internships/featured
// @access  Public
const getFeaturedInternships = async (req, res) => {
  try {
    const internships = await Internship.find({
      featured: true,
      isActive: true,
      applicationDeadline: { $gte: new Date() }
    })
      .populate('postedBy', 'name')
      .sort('-createdAt')
      .limit(8);

    res.json({
      success: true,
      data: internships
    });
  } catch (error) {
    console.error('Get featured internships error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Track internship application
// @route   POST /api/internships/:id/apply
// @access  Public
const trackApplication = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship not found'
      });
    }

    // Check if application deadline has passed
    if (internship.applicationDeadline < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Application deadline has passed'
      });
    }

    // Increment application count
    internship.applicationCount += 1;
    await internship.save();

    res.json({
      success: true,
      message: 'Application tracked successfully',
      data: {
        applicationUrl: internship.applicationUrl,
        applicationCount: internship.applicationCount
      }
    });
  } catch (error) {
    console.error('Track application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get internship statistics
// @route   GET /api/internships/stats
// @access  Private/Admin
const getInternshipStats = async (req, res) => {
  try {
    const stats = await Internship.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          active: { $sum: { $cond: [{ $eq: ['$isActive', true] }, 1, 0] } },
          featured: { $sum: { $cond: [{ $eq: ['$featured', true] }, 1, 0] } },
          totalViews: { $sum: '$viewCount' },
          totalApplications: { $sum: '$applicationCount' },
          expired: {
            $sum: {
              $cond: [
                { $lt: ['$applicationDeadline', new Date()] },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    const categoryStats = await Internship.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          totalViews: { $sum: '$viewCount' },
          totalApplications: { $sum: '$applicationCount' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const locationStats = await Internship.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: {
            country: '$location.country',
            remote: '$location.remote'
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    const companyStats = await Internship.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$company.name',
          count: { $sum: 1 },
          totalViews: { $sum: '$viewCount' },
          totalApplications: { $sum: '$applicationCount' }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    const monthlyStats = await Internship.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 },
          applications: { $sum: '$applicationCount' }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || {
          total: 0,
          active: 0,
          featured: 0,
          totalViews: 0,
          totalApplications: 0,
          expired: 0
        },
        byCategory: categoryStats,
        byLocation: locationStats,
        byCompany: companyStats,
        monthly: monthlyStats
      }
    });
  } catch (error) {
    console.error('Get internship stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getInternships,
  getInternship,
  createInternship,
  updateInternship,
  deleteInternship,
  getFeaturedInternships,
  trackApplication,
  getInternshipStats
};
