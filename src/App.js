import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: '',
      loading: true,
    };

    console.log('constructor');
    this.fetchApi = this.fetchApi.bind(this);
    this.dogTags = this.dogTags.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    this.setState({ loading: true }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((promise) => promise.json())
        .then((data) => this.setState({
          loading: false,
          img: data.message,
        }));
    });
  }

  dogTags(img) {
    const tags = (
      <div>
        <h1>OK</h1>
        <img src={ img } alt="doguinho" />
        <button type="button" onClick={ this.fetchApi }>Próximo</button>
      </div>);
    return tags;
  }

  render() {
    const { img, loading } = this.state;
    console.log('renderizou', img);
    return (
      (loading ? <p>loading...</p> : this.dogTags(img))
    );
  }
}

export default App;
