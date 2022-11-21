const Movie = () => {
  const movies = [
    {
      id: 1,
      name: "Top Gun",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg",
      date: "20-04-2022",
      title:
        "Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski. It is the sequel to the 1986 film Top Gun and the second installment in the Top Gun film series.",
      alt: "Top Gun",
    },
    {
      id: 2,
      name: "Black Phone",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/The_Black_Phone.jpg/220px-The_Black_Phone.jpg",
      date: "20-04-2022",
      title:
        "The Black Phone is a 2021 American coming-of-age supernatural horror film[4] directed by Scott Derrickson and written by Derrickson and C. Robert Cargill, who both produced with Jason Blum.",
      alt: "Black Phone",
    },
    {
      id: 3,
      name: "Dune",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg",
      date: "20-04-2022",
      title:
        "A dune is a landform composed of wind- or water-driven sand. It typically takes the form of a mound, ridge, or hill.[1] An area with dunes is called a dune system[2][3][4][5] or a dune complex",
      alt: "Dune",
    },
    {
      id: 4,
      name: "The Batman",
      img: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
      date: "20-04-2022",
      title:
        "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise.",
      alt: "The Batman",
    },
  ];

  // all btn
  const showAllButton = (event) => {
    event.preventDefault();
    console.log('all btn');
  }

  //  morn btn
  const showMornBtn = (event) => {
    event.preventDefault();
    console.log('morn btn');

    
  }

  // after btn
  const showAfterBtn = (event) => {
    event.preventDefault();
    console.log('after btn');
  }

  // even btn


  const showEvenBtn = (event) => {
    event.preventDefault();
    console.log('even btn');
  }



  return (
    <>
      <div className="title">
        <p>Movies</p>
      </div>

      {/* buttons */}
      <div className="btn">
        <button type="button" onClick={showAllButton}>All</button>
        <button type="button" onClick={showMornBtn}>Morning</button>
        <button type="button" onClick={showAfterBtn}>Afternoon</button>
        <button type="button" onClick={showEvenBtn}>Evening</button>
      </div>

      {/* cards */}

      <div className="parent_card">
        {movies.map((mov, id) => {
          return (
            <div className="card" key={id}>
              <div className="card-img">
                <img src={mov.img} alt={mov.alt} />
              </div>
              <div className="card-text">
                <div className="card-title">
                  <p>{mov.name}</p>
                  <p>{mov.date}</p>
                </div>
                <div className="card-footer">
                  <p>{mov.title}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="card">
          <div className="card-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/The_Black_Phone.jpg/220px-The_Black_Phone.jpg"
              alt=""
            />
          </div>
          <div className="card-title">
            <p>Top Gun</p>
            <p>Date: 11;11;2000</p>
          </div>
          <div className="card-footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg"
              alt=""
            />
          </div>
          <div className="card-title">
            <p>Top Gun</p>
            <p>Date: 11;11;2000</p>
          </div>
          <div className="card-footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg"
              alt=""
            />
          </div>
          <div className="card-title">
            <p>Top Gun</p>
            <p>Date: 11;11;2000</p>
          </div>
          <div className="card-footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Movie;
