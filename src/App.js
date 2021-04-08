
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis ipsum at, atque fugiat culpa. Id ducimus ipsum ipsa quas explicabo consectetur repellendus, aliquid necessitatibus totam! Iusto corrupti itaque debitis ratione commodi ut libero quibusdam expedita tempora eius, provident optio voluptas nesciunt a velit nobis suscipit sapiente consectetur voluptates! Laborum impedit tenetur cum doloremque numquam saepe laboriosam eaque qui magnam vero eveniet natus ex minus eius fuga quis nesciunt modi, molestias ea tempore praesentium obcaecati quidem minima. Provident explicabo maxime officiis molestias, repudiandae praesentium illum aspernatur accusamus sint quod autem velit quia sit? Sapiente placeat dolor et harum modi. Ullam.</p>
      </>
    );
  }
}

export default hot(App);
