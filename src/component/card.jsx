import "../Style/card.scss";
function Card({ data }) {
  return (
    <>
      <div
        className="container"
        style={{
          paddingBottom: "57px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((items) => {
          return (
            <>
              <div className="card">
                <div className="card_box">
                  <div
                    className="imgbox"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      display:items.img
                    }}
                  >
                    <img
                      style={{ height: "80px" }}
                      src={items.img}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <p
                    class="card-title"
                    style={{
                      color: "#dd3aeb",
                      fontWeight: "600",
                      padding: "10px 0px",
                    }}
                  >
                    {items.title}
                  </p>

                  <p
                    class="card-description"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "25px",
                      wordSpacing: "3px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {items.content}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Card;
