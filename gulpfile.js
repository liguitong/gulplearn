var requireDir = require('require-dir');

// Require all tasks in glup/tasks, including subfolders
requireDir('./gulp/tasks',{ recurse: true});
