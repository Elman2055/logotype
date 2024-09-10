import { useEffect, useState } from "react";
import MainPage from "../../components/mainPage/MainPage";
import { useGetProductsQuery } from "../../store/logotypeApi";
import { TProducts } from "../../types/types.data";
import Loader from "../../components/loader/Loader";

const MainPageContainer = () => {
  const [firstRowProducts, setFirstRowProducts] = useState<TProducts[]>([]);
  const [minimalism, setMinimalism] = useState<TProducts[]>([]);
  const { data, isLoading } = useGetProductsQuery("");

  const onEditProducts = () => {
    if (data) {
      setFirstRowProducts(data.products.slice(0, 4));
      setMinimalism(data.products.slice(4, 8));
    }
  };

  useEffect(() => {
    onEditProducts();
  }, [data]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <MainPage firstRow={firstRowProducts} minimalism={minimalism} />
    </>
  );
};

export default MainPageContainer;
