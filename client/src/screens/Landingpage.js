import React from 'react';
import './StyleCSS/Landingpage.css'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'

export default function Landingpage() {
  return (
    <div>

      <section id='title' className='container-flex '>
        <h2>Greatest Food Ever</h2>
        <h1>Ready in 60 seconds</h1>
        <a href='/login'><button className='btn btn-lg'>Place Order</button></a>
        {/* <img src="https://embed.widencdn.net/img/mccormick/mjdxosbfzz/1125x1125px/HYDERABADI-BIRYANI.jpg?crop=true&anchor=749,0&q=80&color=ffffffff&u=qwwekl"></img> */}

      </section>

      <Carousel fade className='container-flex' >
        <Carousel.Item>
          <img
            style={{ height: '400px' }}
            className="d-block w-100 "
            src="https://www.india.com/wp-content/uploads/2020/09/CKDR7-CHICKEN-BIRYANI.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{conlor:'black',fontWeight:'bold'}}>Biryani</h3>
            <p>Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.
              It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties.
              Biryani is popular throughout the Indian subcontinent, as well as among its diaspora</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '400px' }}
            className="d-block w-100 cardimage"
            src="https://www.masala.tv/wp-content/uploads/2016/07/Chicken-Chowmein-recipe.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{conlor:'black',fontWeight:'bold'}}>Chow Mein</h3>
            <p>Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or tofu; the name is a romanization of the Taishanese chāu-mèn. 
              The dish is popular throughout the Chinese diaspora and appears on the menus of most Chinese restaurants abroad.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src="https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR-1140x500.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{conlor:'black',fontWeight:'bold'}}>Paner Tikka</h3>
            <p>Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. 
              It is a vegetarian alternative to chicken tikka and other meat dishes. 
              It is a popular dish that is widely available in India and countries with an Indian diaspora</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div>
        <h2 style={{ fontSize: '35px', fontWeight: 'bold', paddingTop: '3%' }}>Chose & Enjoy</h2>
        <p>Here ours delicious items</p>
      </div>


      {/* cardsection */}
      <div className='row justify-content-center p-2 mb-4'>

        <Card style={{ width: '18rem', height: '18rem' }}>
          <Card.Img src="https://cookwithparul.com/wp-content/uploads/2020/12/MicrosoftTeams-image-1.jpg"
            style={{ height: '250px', width: '250px', paddingTop: '9%', paddingLeft: '8%' }} />
          <Card.Body style={{ paddingTop: '6%' }}>
            <Card.Title>Paner Tikka</Card.Title>
            <Card.Text>
              Upto 15% discount
              <a style={{ paddingTop: '20px' }} href='/login'><button className='btn btn-sm-danger text-right'>Order Now</button></a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '18rem' }}>
          <Card.Img src="https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg"
            style={{ height: '250px', width: '250px', paddingTop: '9%', paddingLeft: '8%' }} />
          <Card.Body style={{ paddingTop: '6%' }}>
            <Card.Title>Biryani</Card.Title>
            <Card.Text>
              Upto 40% discount
              <a style={{ paddingTop: '20px' }} href='/login'><button className='btn btn-sm-danger text-right'>Order Now</button></a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '18rem' }}>
          <Card.Img src="https://i.ytimg.com/vi/JC_oinehBLc/maxresdefault.jpg"
            style={{ height: '250px', width: '250px', paddingTop: '9%', paddingLeft: '8%' }} />
          <Card.Body style={{ paddingTop: '6%' }}>
            <Card.Title>Chow Mein</Card.Title>
            <Card.Text>
              Upto 30% discount
              <a style={{ paddingTop: '20px' }} href='/login'><button className='btn btn-sm-danger text-right'>Order Now</button></a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


      {/* footersection */}
      <section id='footer'>
        <Navbar bg="dark" variant="dark">
          <ul className='container text-left'>
            <li>
              <h2 style={{ color: '#fff', fontSize: '17px', paddingTop: '10px' }}>Contact details</h2>
              <br />
              <p style={{ color: '#fff', fontSize: '12px' }} >Contact Number: +333-0102566552</p>
              <p style={{ color: '#fff', fontSize: '12px' }} >Location : Barasat</p>
              <p style={{ color: '#fff', fontSize: '12px' }} >North 24 Pgs</p>
            </li>
            <li>
              <h2 style={{ color: '#fff', fontSize: '25px', paddingTop: '10px' }}>Owner</h2>
              <p style={{ color: '#fff', fontSize: '12px' }} >Proshanta Debnath</p>

            </li>
            <li>
              <h2 style={{ color: '#fff', fontSize: '25px', paddingTop: '10px' }}>Developer</h2>
              <p style={{ color: '#fff', fontSize: '12px' }} >Proshanta Debnath</p>
              <a href='https://www.linkedin.com/in/proshantadebnath/'><i class="fab fa-linkedin fa-3x"></i></a>
            </li>
          </ul>
        </Navbar>
      </section>


    </div>
  );
}
