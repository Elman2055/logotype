import { useParams } from "react-router-dom";
import Category from "../../components/category/Category";
import { useGetProductsQuery } from "../../store/logotypeApi";
import { useEffect, useState, useMemo } from "react";
import { TProducts } from "../../types/types.data";
import Loader from "../../components/loader/Loader";
import useDesktop from "../../hooks/useDesktop";

const CategoryContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery("");
  const isDesktop = useDesktop();

  const [page, setPage] = useState(1);
  const [cardLength] = useState<number>(isDesktop ? 12 : 5);

  const products = useMemo(() => {
    if (data) {
      return data.products.filter((el: TProducts) => el.category === id);
    }
    return [];
  }, [data, id]);

  const totalPages = useMemo(
    () => Math.ceil(products.length / cardLength),
    [products]
  );

  const currentProducts = useMemo(() => {
    const startIndex = (page - 1) * cardLength;
    return products.slice(startIndex, startIndex + cardLength);
  }, [page, products]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, totalPages]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <Category
        products={currentProducts}
        category={id ? id : ""}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default CategoryContainer;
