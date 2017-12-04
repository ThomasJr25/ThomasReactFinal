let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">E-MOVIES</div>
              </div>
            </div>

    <div className="list-group">
        <li><a href='#' onClick={process.Action}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Action</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
    </div>
        <div className="list-group">
      <ul>
        <li><a href='#' onClick={process.Horror}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Horror</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Sci}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Sci-Fi</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Comedy}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Comedy</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Romance}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Romance</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
      <div className="list-group">
      <ul>
        <li><a href='#' onClick={process.Mystery}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mystery</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>  
      </ul>
    </div>

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },

   Action:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">ACTION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            </div>

            <br /><center><img src={"img/justice.jpg"} width={"100%"}/>
            <p> Fueled by his restored faith in humanity and inspired by Superman's selfless act, 
          Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.</p></center> 
            <br />
            <center><img src={"img/thor.jpg"} width={"100%"}/>
            <p> Imprisoned, the almighty Thor finds himself in a lethal gladiatorial contest against the Hulk, his former ally. 
          Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home 
          and the Asgardian civilization.</p></center>
            <br />

            <center><img src={"img/spider.jpg"} width={"100%"}/>    
            <p> Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, 
          and finds himself on the trail of a new menace prowling the skies of New York City.</p></center>
            <br />

           <center><img src={"img/john.jpg"} width={"100%"}/>
           <p>After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.</p></center>
          <br />

          <center><img src={"img/fast.jpg"} width={"100%"}/>
          <p>When a mysterious woman seduces Dom into the world of terrorism and a betrayal of those closest to him, 
          the crew face trials that will test them as never before.</p></center>
          <br />



 <a href='#' onClick={process.menu}>back</a>

            
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
     Horror:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">HORROR </div>
              </div>
            </div>
            <br /><center><img src={"img/it.jpg"} width={"100%"}/>
            <p> A group of bullied kids band together when a shapeshifting monster, taking the appearance of a clown, begins hunting children. </p></center>
            <br />
            <center><img src ={"img/anna.jpg"} width = {"100%"}/>
            <p> 12 years after the tragic death of their little girl, 
          a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, 
          where they soon become the target of the dollmaker's possessed creation, Annabelle.</p></center>

 <a href='#' onClick={process.menu}>back</a>
            
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },

  loading:function(){
    let content = <div>
          <img src={"img/1.jpg"} width={"100%"}/>
    </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},1500);