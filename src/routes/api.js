const express = require("express");
const router = express.Router();

const {
  productBrandList,
  productCategoryList,
  productSliderList,
  productListByBrand,
  productListByCategory,
  productListBySimiliar,
  productListByKeyword,
  productListByRemark,
  productDetail,
  productReviewList,
} = require("../controllers/productsController");

// Product
router.get("/productBrandList", productBrandList);
router.get("/productCategoryList", productCategoryList);
router.get("/productSliderList", productSliderList);
router.get("/productListByBrand/:brandID", productListByBrand);
router.get("/productListByCategory/:categoryID", productListByCategory);
router.get("/productListByRemark/:remark", productListByRemark);
router.get("/productListBySimiliar/:categoryID", productListBySimiliar);
router.get("/productDetail/:productID", productDetail);
router.get("/productListByKeyword/:keyword", productListByKeyword);

router.get("/productReviewList/:productID", productReviewList);

module.exports = router;
