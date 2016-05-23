'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var metadataSchema = new Schema({
  value:String,
  name:String
});

var contentsSchema = new Schema({
  url:String,
  format:String,
  width:Number,
  height:Number,
  language:String,
  duration:Number,
  geoLock:Boolean,
  id:String
});

var creditsSchema = new Schema({
  role:String,
  name:String
});

var parentalRatingsSchema = new Schema({
  scheme:String,
  rating:String
});

var imagesSchema = new Schema({
  type:String,
  url:String,
  width:Number,
  height:Number,
  id:String
});

var categoriesSchema = new Schema({
  title:String,
  description:String,
  id:String
});

var HistorySchema = new Schema({
  title: String,
  description: String,
  type: String,
  publishedDate: Number,
  availableDate: Number,
  metadata: Array,
  contents:Array,
  credits:Array,
  parentalRatings:Array,
  images:Array,
  categories:Array,
  id:String
});

module.exports = mongoose.model('HistoryModel', HistorySchema);
