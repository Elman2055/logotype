import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductsQuery,
  useGetProductQuery,
} from "../../store/logotypeApi";
import Loader from "../../components/loader/Loader";
import ProductPage from "../../components/productPage/ProductPage";
import { TProducts } from "../../types/types.data";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data: productData, isLoading } = useGetProductQuery(Number(id));
  const { data: productsData, isLoading: loadingProducts } =
    useGetProductsQuery("");

  const [firstRow, setFirstRow] = useState<TProducts[]>([]);
  const [recomendation, setRecomendation] = useState<TProducts[]>([]);

  const onEditProducts = () => {
    if (productsData) {
      setFirstRow(productsData.products.slice(8, 12));
      setRecomendation(productsData.products.slice(12, 16));
    }
  };

  useEffect(() => {
    onEditProducts();
  }, [productsData]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Loader isOpen={isLoading || loadingProducts} />
      <ProductPage
        product={productData?.product}
        firstRow={firstRow}
        minimalism={recomendation}
      />
    </>
  );
};

export default ProductPageContainer;
