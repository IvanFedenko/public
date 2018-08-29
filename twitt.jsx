const Twitt = React.createClass({
  render () {
    const{
      author,
      text,
      avatar,
      likes,
      tweets,
      image,
    }=this.props;
    return(
      <div className="tweet">

         <img className="tweet-avatar"
         src={avatar}
         alt={author} />

         <div className="tweet-body">

         <a
         className="tweet-author"
         href={`https://twitter.com/RadioLemberg`}
         target="_blanc">
         @{author}
         </a>

         <p className="tweet-text">{text}</p>
         <img src={image}  width={300} height={450} />
         <br/>

            <div className="tweet-stats">
               <div className="tweet-retweets">
            <i className="tweet-stat-icon fa fa-heart" />
               {likes}
               </div>

               <div className="tweet-likes">
            <i className="tweet-stat-icon fa fa-comments-o" />
               {tweets}
               </div>

            </div>

         </div>

      </div>
    );
  }
});
ReactDOM.render(
  <div>
   <Twitt
     author="Ivan"
     text="Lorem ipsum dolor sit amet, an putant vivendum complectitur sit. Eum no cetero appetere. Nisl integre probatus te sit, ei regione meliore intellegat his. Sit ut tale iisque indoctum."
     image="man.jpg"
     avatar="152.jpg"
     likes={200}
     tweets={300} />
  </div>,
    document.getElementById('twitt')

)
