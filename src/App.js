import React from 'react';
import './App.css';
import Header from './components/header.js';
import AnimalList from './components/animal-list.js'

const userName = 'Simeon';

class App extends React.Component {
  state = {
    showImages: false,
    puppies: [
      {
        name: 'Dexter',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fminidoodledogs.com%2Fwp-content%2Fuploads%2F2017%2F11%2FTeacup-Goldendoodle-Utah-Idaho-New_York-Philadephia-Massachussets-Georgia-Virginai-California-Washington-Goldendoodle-Puppies-Golden-doodle-Dog-0001-1.jpg&f=1&nofb=1',
        cuteness: 3,
      },
      {
        name: 'Gripper',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhiddenpondlabradors.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fsept172110.jpg&f=1&nofb=1',
        cuteness: 5,
      },
      {
        name: 'Foxy',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-nqWl0huZbvo%2FUOQuudYjQqI%2FAAAAAAAAODU%2F1cEZlr5-pZ4%2Fs1600%2Fpomeranian-puppy.jpg&f=1&nofb=1',
        cuteness: 4,
      },
      {
        name: 'Kippen',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.101dogbreeds.com%2Fwp-content%2Fuploads%2F2015%2F03%2FWestiepoo-Puppy.jpg&f=1&nofb=1',
        cuteness: 2,
      },
      {
        name: 'Jasmine',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.101dogbreeds.com%2Fwp-content%2Fuploads%2F2018%2F10%2FRed-Golden-Retriever.jpg&f=1&nofb=1',
        cuteness: 1,
      },
    ],
    kitties: [
      {
        name: 'Birman',
        image:
          'https://bestcatadvisor.com/wp-content/uploads/Birman-cat-1-259x300.jpg',
        cuteness: 4,
      },
      {
        name: 'Bella',
        image:
          'https://www.europetnet.com/images/catbreeds/52.jpg',
        cuteness: 5,
      },
      {
        name: 'Oscar',
        image:
          'https://i.dailymail.co.uk/i/pix/2014/09/08/1410184268404_wps_46_Lesley_Pleasant_s_cat_Osc.jpg',
        cuteness: 2,
      },
      {
        name: 'Marmite',
        image:
          'https://media.daysoftheyear.com/20171223130148/black-cat-day-1-scaled.jpg',
        cuteness: 1,
      },
      {
        name: 'Misty',
        image:
          'https://i.pinimg.com/originals/9f/ed/0a/9fed0a691575a2635fc394d7a7d529bf.jpg',
        cuteness: 3,
      },
    ],
  }

  handleImagesClick = () => {
    console.log('Clicked Show/Hide');
    this.setState((currentState) => {
      console.log(currentState, '<-- currentState')
      return {
        showImages: !currentState.showImages
      }
    });
  };

  sortAnimals = (event) => {
    console.log('Clicked Sort Animals');

    const requestedSort = event.target.name;
    this.setState((currentState) => {

      let animalsToSort = '';

      if (requestedSort === 'puppySortButton') {
        animalsToSort = 'puppies';
      } else {
        animalsToSort = 'kitties';
      }

      const sortedAnimals = currentState[animalsToSort].sort((a, b) => {
        return b.cuteness - a.cuteness;
      });

      return {
        animalsToSort: sortedAnimals,
      }
    });
  };

  registerPresence() {
    console.log('Hello ' + userName);
  };

  addAnimal() {
    this.setState(() => {

    });
  };

  render() {
    console.log('Rendering...')
    return (
      <div className="App">
        <button onClick={this.registerPresence}>REGISTER</button>
        <Header user={userName} animals="Puppies" />
        <button onClick={this.handleImagesClick}>Show / Hide Animals!</button>
        <AnimalList animals={this.state.puppies} showImages={this.state.showImages} />
        <button name='puppySortButton' onClick={this.sortAnimals}>Sort By Cuteness</button>
        <p>-------------------------------------------</p>
        <Header user={userName} animals="Kitties" />
        <AnimalList animals={this.state.kitties} showImages={this.state.showImages} />
        <button name='kittySortButton' onClick={this.sortAnimals}>Sort By Cuteness</button>
      </div>
    );
  };
};

export default App;

// module.exports = App
