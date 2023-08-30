const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Permission denied' });
    }
  };
  
  // Use Admin middleware for routes that require admin approval
  app.put('/api/approve/:contentId', isAdmin, (req, res) => {
    // Approve content logic
  });
  
  app.put('/api/reject/:contentId', isAdmin, (req, res) => {
    // Reject content logic
  });