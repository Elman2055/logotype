import { TCategory } from "../../types/types.data";
import { useNavigate } from "react-router-dom";
import useDesktop from "../../hooks/useDesktop";
import styles from "./Category.module.css";

const Category = ({ products, category }: TCategory) => {
  const navigate = useNavigate();
  const isDesktop = useDesktop();

  return (
    <div className={styles.container}>
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
              onClick={() => navigate({ pathname: `/category/${el.category}` })}
              className={`${styles.categoryBtn} ${
                category === el.category ? styles.activeBtn : ""
              }`}
            >
              {el.name}
            </button>
          ))}
        </div>
      )}
      <div className={styles.titleContainer}>
        <h3 className={styles.titleUp}>{products[0]?.category}</h3>
        <p className={styles.descriptionUp}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {products.length > 0 &&
          products.map((el) => (
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
  );
};

export default Category;
