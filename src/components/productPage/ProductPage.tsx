import { TMain } from "../../types/types.data";
import { useNavigate } from "react-router-dom";
import useDesktop from "../../hooks/useDesktop";
import styles from "./ProductPage.module.css";

const ProductPage = ({ product, firstRow, minimalism }: TMain) => {
  const isDesktop = useDesktop();
  const navigate = useNavigate();

  const firstRowProduct = isDesktop ? firstRow : firstRow.slice(0, 1);
  const minimalismProduct = isDesktop ? minimalism : minimalism.slice(0, 1);

  return (
    <>
      <div className={styles.productContainer}>
        {!isDesktop && (
          <div className={styles.mobileCategories}>
            {[
              { name: "Минимализм", category: "Минималистичные" },
              { name: "Эмблемы", category: "Эмблемы" },
              { name: "Абстракция", category: "Абстрактные" },
              { name: "Типографика", category: "Типографика" },
              { name: "Стартапы", category: "Векторные" },
              { name: "Лаконичные", category: "Геометрические" },
            ].map((el, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate({ pathname: `/category/${el.category}` })
                }
              >
                {el.name}
              </button>
            ))}
          </div>
        )}
        {product &&
          product.map((el) => (
            <div key={el.product_id} className={styles.productContainerBlock}>
              {isDesktop && (
                <img
                  src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
                  alt="product"
                  className={styles.productImage}
                />
              )}
              <div className={styles.productBlock}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                {!isDesktop && (
                  <img
                    src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
                    alt="product"
                    className={styles.productImage}
                  />
                )}
                {isDesktop && (
                  <button className={styles.buyBtn}>
                    КУПИТЬ ЗА {el.price}ТГ
                  </button>
                )}
                <p className={styles.downTitle}>Описание{!isDesktop && ":"}</p>
                <p className={styles.downDescription}>{el.description}</p>
                {!isDesktop && (
                  <button className={styles.buyBtn}>
                    КУПИТЬ ЗА {el.price}ТГ
                  </button>
                )}
              </div>
            </div>
          ))}
        <h3 className={styles.recomendation}>
          ПОХОЖИЕ РЕЗУЛЬТАТЫ ПО ВАШЕМУ ЗАПРОСУ
        </h3>
      </div>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {firstRowProduct.map((el) => (
            <div
              key={el.product_id}
              className={styles.card}
              onClick={() => {
                navigate({ pathname: `/product/${el.product_id}` });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
                alt="card"
                className={styles.firstRowCardImage}
              />
              <p>{el.description}</p>
              <p className={styles.price}>{el.price}ТГ</p>
              <button className={styles.buy}>КУПИТЬ</button>
            </div>
          ))}
        </div>
        <h3 className={styles.recomendation}>РЕКОМЕНДОВАННЫЕ ТОВАРЫ</h3>
        <div className={styles.cardsContainer}>
          {minimalismProduct.map((el) => (
            <div
              key={el.product_id}
              className={styles.card}
              onClick={() => {
                navigate({ pathname: `/product/${el.product_id}` });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={`https://logotype.webshop2.kz/api/products/previewImage/${el.photo_preview}`}
                alt="card"
                className={styles.firstRowCardImage}
              />
              <p>{el.description}</p>
              <p className={styles.price}>{el.price}ТГ</p>
              <button className={styles.buy}>КУПИТЬ</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
