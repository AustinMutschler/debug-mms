const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestsSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' }, versionKey: 'version' }
);

const Tests = mongoose.model('tests', TestsSchema);

module.exports = Tests;
