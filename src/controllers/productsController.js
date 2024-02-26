const {
  brandListService,
  categoryListService,
  sliderListService,
  listByBrandService,
  listByCategoryService,
  listByRemarkService,
  listBySimiliarService,
  detailsService,
  listByKeywordService,
  reviewListService,
} = require("../services/productsServices");

exports.productBrandList = async (req, res) => {
  const result = await brandListService();
  return res.status(200).json(result);
};
exports.productCategoryList = async (req, res) => {
  const result = await categoryListService();
  return res.status(200).json(result);
};
exports.productSliderList = async (req, res) => {
  const result = await sliderListService();
  return res.status(200).json(result);
};
exports.productListByBrand = async (req, res) => {
  const result = await listByBrandService(req);
  return res.status(200).json(result);
};
exports.productListByCategory = async (req, res) => {
  const result = await listByCategoryService(req);
  return res.status(200).json(result);
};
exports.productListByRemark = async (req, res) => {
  const result = await listByRemarkService(req);
  return res.status(200).json(result);
};
exports.productListBySimiliar = async (req, res) => {
  const result = await listBySimiliarService(req);
  return res.status(200).json(result);
};

exports.productListByKeyword = async (req, res) => {
  const result = await listByKeywordService(req);
  return res.status(200).json(result);
};

exports.productDetail = async (req, res) => {
  const result = await detailsService(req);
  return res.status(200).json(result);
};

exports.productReviewList = async (req, res) => {
  const result = await reviewListService(req);
  return res.status(200).json(result);
};
