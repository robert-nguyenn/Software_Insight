const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message, category } = req.body;

    // Create contact record
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      category: category || 'General Inquiry',
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip || req.connection.remoteAddress
    });

    // Send email notification to admin
    try {
      const transporter = createTransporter();
      
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || 'admin@softwareinsight.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
              <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #495057; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #d1ecf1; border-radius: 8px;">
              <p style="margin: 0; color: #0c5460;">
                <strong>Contact ID:</strong> ${contact._id}<br>
                You can respond to this inquiry from your admin dashboard.
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting CodeLaunch',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">CodeLaunch</h1>
              <p style="color: #f8f9fa; margin: 10px 0 0 0;">Empowering Future Developers</p>
            </div>
            
            <div style="padding: 30px; background-color: #fff; border: 1px solid #e9ecef; border-top: none;">
              <h2 style="color: #333; margin-top: 0;">Thank You for Reaching Out!</h2>
              
              <p style="color: #666; line-height: 1.6;">Dear ${name},</p>
              
              <p style="color: #666; line-height: 1.6;">
                Thank you for contacting CodeLaunch. We have received your message and our team will review it shortly.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #495057; margin-top: 0;">Your Message Summary</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Reference ID:</strong> ${contact._id}</p>
              </div>
              
              <p style="color: #666; line-height: 1.6;">
                We typically respond within 24-48 hours during business days. If your inquiry is urgent, 
                please don't hesitate to reach out to us directly at 
                <a href="mailto:${process.env.EMAIL_USER}" style="color: #667eea;">${process.env.EMAIL_USER}</a>.
              </p>
              
              <p style="color: #666; line-height: 1.6;">
                In the meantime, feel free to explore our courses and resources on our website.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block;">
                  Visit Our Website
                </a>
              </div>
              
              <p style="color: #666; line-height: 1.6;">
                Best regards,<br>
                The CodeLaunch Team
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                © ${new Date().getFullYear()} CodeLaunch. All rights reserved.
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(userMailOptions);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: contact._id,
        submittedAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Submit contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit your message. Please try again.'
    });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      category,
      priority,
      search
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (priority) filter.priority = priority;

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get contacts with pagination
    const contacts = await Contact.find(filter)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email')
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single contact message
// @route   GET /api/contact/:id
// @access  Private/Admin
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email avatar')
      .populate('response.respondedBy', 'name email avatar');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    // Mark as read if not already read
    if (!contact.isRead) {
      contact.isRead = true;
      contact.readAt = new Date();
      await contact.save();
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
const updateContact = async (req, res) => {
  try {
    const { status, priority, assignedTo } = req.body;

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    if (status) contact.status = status;
    if (priority) contact.priority = priority;
    if (assignedTo) contact.assignedTo = assignedTo;

    await contact.save();

    const updatedContact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email');

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: updatedContact
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Respond to contact message
// @route   POST /api/contact/:id/respond
// @access  Private/Admin
const respondToContact = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Response message is required'
      });
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    // Update contact with response
    contact.response = {
      message,
      respondedBy: req.user.id,
      respondedAt: new Date()
    };
    contact.status = 'resolved';

    await contact.save();

    // Send response email to user
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: contact.email,
        subject: `Re: ${contact.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0;">CodeLaunch</h1>
              <p style="color: #f8f9fa; margin: 10px 0 0 0;">Response to Your Inquiry</p>
            </div>
            
            <div style="padding: 30px; background-color: #fff; border: 1px solid #e9ecef; border-top: none;">
              <h2 style="color: #333; margin-top: 0;">Response to Your Message</h2>
              
              <p style="color: #666;">Dear ${contact.name},</p>
              
              <p style="color: #666;">Thank you for reaching out to us. Here's our response to your inquiry:</p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #495057; margin-top: 0;">Your Original Message</h3>
                <p><strong>Subject:</strong> ${contact.subject}</p>
                <p style="color: #666; font-style: italic;">"${contact.message}"</p>
              </div>
              
              <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0c5460; margin-top: 0;">Our Response</h3>
                <p style="color: #0c5460; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p style="color: #666;">
                If you have any follow-up questions, please don't hesitate to contact us again.
              </p>
              
              <p style="color: #666;">
                Best regards,<br>
                The CodeLaunch Team
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Response email error:', emailError);
    }

    const updatedContact = await Contact.findById(req.params.id)
      .populate('response.respondedBy', 'name email');

    res.json({
      success: true,
      message: 'Response sent successfully',
      data: updatedContact
    });
  } catch (error) {
    console.error('Respond to contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    await contact.deleteOne();

    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get contact statistics
// @route   GET /api/contact/stats
// @access  Private/Admin
const getContactStats = async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          pending: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] } },
          inProgress: { $sum: { $cond: [{ $eq: ['$status', 'in-progress'] }, 1, 0] } },
          resolved: { $sum: { $cond: [{ $eq: ['$status', 'resolved'] }, 1, 0] } },
          closed: { $sum: { $cond: [{ $eq: ['$status', 'closed'] }, 1, 0] } },
          unread: { $sum: { $cond: [{ $eq: ['$isRead', false] }, 1, 0] } }
        }
      }
    ]);

    const categoryStats = await Contact.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const monthlyStats = await Contact.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
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
          pending: 0,
          inProgress: 0,
          resolved: 0,
          closed: 0,
          unread: 0
        },
        byCategory: categoryStats,
        monthly: monthlyStats
      }
    });
  } catch (error) {
    console.error('Get contact stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  submitContact,
  getContacts,
  getContact,
  updateContact,
  respondToContact,
  deleteContact,
  getContactStats
};
