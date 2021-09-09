import React from 'react';

class ListItems extends React.Component {

     loadnote(item,e) {
      console.log(item);
      //https://es.reactjs.org/docs/lifting-state-up.html
    }

    render() {
        
        if( this.props.items.length === 0 ) {
          this.display = <div><p>Empty notes</p></div>
        } else {
            this.display =  
            <div>
            {this.props.items.map((item,i) => (
              <div key={i} className="note" onClick={(e) => this.loadnote(item, e)}>
                <span className="title">{item.title}</span>
                <span className="description">{item.description}</span>
                <span className="key">{item.key}</span>
            </div>
            ))}
          </div>
        }

    return (
        <div>{this.display}</div>
    );
  }
}

export default ListItems;
