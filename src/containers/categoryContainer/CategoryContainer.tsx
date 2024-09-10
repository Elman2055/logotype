import { useParams } from "react-router-dom";
import Category from "../../components/category/Category";
import { useGetProductsQuery } from "../../store/logotypeApi";
import { useEffect, useState } from "react";
import { TProducts } from "../../types/types.data";
import Loader from "../../components/loader/Loader";

const CategoryContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery("");

  const [products, setProducts] = useState<TProducts[]>([]);

  const getProduct = () => {
    if (data) {
      setProducts(data.products.filter((el: TProducts) => el.category === id));
    }
  };

  useEffect(() => {
    getProduct();
  }, [data, id]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <Category products={products} category={id ? id : ""} />
    </>
  );
};

export default CategoryContainer;
