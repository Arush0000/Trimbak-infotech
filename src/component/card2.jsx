import "../Style/Card2.scss";
function Card2() {
  const Data1 = [
    {
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_are_the_Types_of_Cloud_Computing_and_Cloud_Services.jpg",
      Title: "Cloud Services",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://www.continuumindia.com/wp-content/uploads/2020/08/data-migration-services-inner-1.jpg",
      Title: "Data Migration",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg",
      Title: "Cyber Security",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://computercare.net/wp-content/uploads/2019/08/Blog-Post-Header.png",
      Title: "Computer Hardware",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://ncube.com/wp-content/uploads/2022/10/software-product-development-services.jpg",
      Title: "Engineers Outsourcing",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/unnamed_RTmGiMI.width-1300.png",
      Title: "Data Centres",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://t7i9h9w8.rocketcdn.me/wp-content/uploads/2021/09/img-blog-What-are-the-essential-components-of-network-security.jpg",
      Title: "Network Securities",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://images.herzindagi.info/image/2024/Feb/Laptop-Refurbished-Price.jpg",
      Title: "Refurbished Laptops",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://cdn.sanity.io/images/tlr8oxjg/production/a2995f5769a7c62f310f6727ebd136c672f17b3e-1456x816.png?w=3840&q=100&fit=clip&auto=format",
      Title: "Firewall Licensing",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://www.fujifilm.com/fbhk/-/media/fbhk/7,-d-,-insights/1027683138_1920x1080.jpg",
      Title: "Cost Cutting",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_C1t9T575EiXCJl2j6v_iug8tk6vZCS8bg&s",
      Title: "E-Waste",
       description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    },
    {
        img: "https://tipa.in/wp-content/uploads/2021/05/corporate-trainer-1.jpg",
        Title: "Corporate Trainings",
         description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
      },

  ];

  return (
    <>
    < div className="container1" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"12px",paddingBottom: "57px"}}>
      {Data1.map((items1)=>{
        
        return<>
        <article class="card">
        <img
          class="card__background"
          src={items1.img}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="800"
          height="300"
        />
        <div class="card__content | flow">
          <div class="card__content--container | flow">
            <h2 class="card__title">{items1.Title}</h2>
            <p class="card__description">
              {items1.description}
            </p>
          </div>
          <button class="card__button">Read more</button>
        </div>
      </article>
        </>
      })}
      </div>
    </>
  );
}
export default Card2;
