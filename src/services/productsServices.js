const mongoose = require("mongoose");
const Brand = require("../models/Brand");
const Category = require("../models/Catagory");
const ProductSlider = require("../models/ProductSlider");
const Product = require("../models/Product");

const brandListService = async () => {
  try {
    const data = await Brand.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

const categoryListService = async () => {
  try {
    const data = await Category.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

const sliderListService = async () => {
  try {
    const data = await ProductSlider.find();
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};
// product list by brand ID
const listByBrandService = async (req) => {
  try {
    const brandID = new mongoose.Types.ObjectId(req.params.brandID);
    const matchStage = { $match: { brandID: brandID } };
    const joinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const jointWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const unwindBrandStage = { $unwind: "$brand" };
    const unwindCategoryStage = { $unwind: "$category" };
    const projectionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      joinWithBrand,
      jointWithCategory,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};
// prouct list by categoryID
const listByCategoryService = async (req) => {
  const categoryID = new mongoose.Types.ObjectId(req.params.categoryID);
  try {
    const matchStage = { $match: { categoryID } };
    const jointWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unwindCategoryStage = { $unwind: "$category" };
    const unwindBrandStage = { $unwind: "$brand" };
    const projectionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "category._id": 0,
        "brand._id": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      jointWithCategory,
      joinWithBrand,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

// product list by remark
const listByRemarkService = async (req) => {
  try {
    const remark = req.params.remark;
    const matchStage = { $match: { remark } };
    const jointWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unwindCategoryStage = { $unwind: "$category" };
    const unwindBrandStage = { $unwind: "$brand" };
    const projectionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      jointWithCategory,
      joinWithBrandStage,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "failed", error: error.toString() };
  }
};
// product list by similiar category
const listBySimiliarService = async (req) => {
  const categoryID = new mongoose.Types.ObjectId(req.params.categoryID);
  try {
    const matchStage = { $match: { categoryID } };
    const limitStage = { $limit: 20 };
    const jointWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unwindCategoryStage = { $unwind: "$category" };
    const unwindBrandStage = { $unwind: "$brand" };
    const projecttionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      limitStage,
      jointWithCategoryStage,
      joinWithBrandStage,
      unwindCategoryStage,
      unwindBrandStage,
      projecttionStage,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", error: error.toString() };
  }
};
const detailsService = async (req) => {
  try {
    const productID = new mongoose.Types.ObjectId(req.params.productID);
    const matchStage = { $match: { _id: productID } };
    const jointWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const joinWithDetailStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "detail",
      },
    };
    const unwindCategoryStage = { $unwind: "$category" };
    const unwindBrandStage = { $unwind: "$brand" };
    const unwindDetailStage = { $unwind: "$detail" };
    const projecttionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "brand._id": 0,
        "category._id": 0,
        "detail._id": 0,
        "detail.productID": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      jointWithCategoryStage,
      joinWithBrandStage,
      joinWithDetailStage,
      unwindCategoryStage,
      unwindBrandStage,
      unwindDetailStage,
      projecttionStage,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "failed", error: error.toString() };
  }
};

const listByKeywordService = async (req) => {
  try {
    const keyword = req.params.keyword;
    const searchRegex = { $regex: keyword, $options: "i" };
    const searchParams = [{ title: searchRegex }, { des: searchRegex }];
    const searchQuery = { $or: searchParams };
    const matchStage = { $match: searchQuery };
    const jointWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    const unwindCategoryStage = { $unwind: "$category" };
    const unwindBrandStage = { $unwind: "$brand" };
    const projecttionStage = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };
    const data = await Product.aggregate([
      matchStage,
      jointWithCategoryStage,
      joinWithBrandStage,
      unwindCategoryStage,
      unwindBrandStage,
      projecttionStage,
    ]);
    return { status: "success", data };
  } catch (error) {
    return { staus: "failed", error: error.toString() };
  }
};

const reviewListService = async (req) => {
  const productID = new mongoose.Types.ObjectId(req.params.productID);
  const matchStage = {$match:{productID}};
   
};

module.exports = {
  brandListService,
  categoryListService,
  sliderListService,
  listByBrandService,
  listByCategoryService,
  listBySimiliarService,
  listByKeywordService,
  listByRemarkService,
  detailsService,
  reviewListService,
};
