import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import logo from './images/logo.png';
import images from './images.js';
const navItemsLeft = [
  "Inicio",
  "Carretera",
  "Ciudad",
  "Off Road",
  "Trall",
  "Trial",
  "Casual",
  "Accesorios",
];
const navItemsRight = ["Ayuda", "Nuestras tiendas", "Contacto"];
let arrayCat = [
  "Botas",
  "Cascos",
  "Chaquetas",
  "Guantes",
  "Impermeables",
  "Intercomunicadores",
  "Monos",
  "Pantalones",
  "Protecciones",
  "Maletas rigidas",
  "Maletas blandas",
  "Antirrobos",
  "Estriberas",
  "Manillares",
  "Porta matriculas",
  "Sistemas de escape",
  "Neumáticos",
  "Baterías",
];
let arrayHelmetImg = [
  ["AGV Skyline Block", images.casco1],
  ["Schuberth SR1", images.casco2],
  ["Arai Quantum DNA", images.casco3],
  ["Shoei XR1100 Enigm TC-4", images.casco4],
];

let arrayItems = [
  {
    title: "Alpinestars GP-PRO",
    image: images.item1,
    price: 55,
    type: "Chaqueta"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item2,
    price: 55,
    type: "Casco"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item3,
    price: 55,
    type: "Chaqueta"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item4,
    price: 55,
    type: "Botas"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item5,
    price: 55,
    type: "Pantalones"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item6,
    price: 55,
    type: "Casco"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item7,
    price: 55,
    type: "Casco"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item8,
    price: 55,
    type: "Casco"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item9,
    price: 55,
    type: "Casco"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item10,
    price: 55,
    type: "Guantes"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item11,
    price: 55,
    type: "Guantes"
  },
  {
    title: "Alpinestars GP-PRO",
    image: images.item12,
    price: 55,
    type: "Chaqueta"
  },
];
let arrItems = [
  "Aviso legal",
  "Política de privacidad",
  "Gastos de envío",
  "Sistemas de pago",
  "Plazos de entrega",
  "Devoluciones",
];
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItemsLeft : navItemsLeft,
      navItemsRight : navItemsRight
    }
  }
  
  render(){
    
    return (
      <header>
        <div className="headSup">
          <div className="logo">
            <h1>MOTO</h1>
            <p>SHOP</p>
            <img src={logo} alt="" />
          </div>
          <NavBar classNav="menuSup" items={this.state.navItemsRight}/>
         
        </div>
        <NavBar items={this.state.navItemsLeft} />
        </header>
    );
  }
}
class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : this.props.items
    }
  }
  render(){
    
    if(this.props.classNav === "menuSup"){
     
      return <><div className="menuSup">
        {
          this.state.items.map((x,i)=>{
            return <div className="nav-item" key={"aMenu" + i}>{x}</div>
          })
        }
        </div></>
    }else{
      return <><nav>
        {
          this.state.items.map((x,i)=>{
            return <div className="nav-item"key={"bMenu" + i}>{x}</div>
          })
        }
        </nav></>
    }
    
  }
  
}


class Featured extends React.Component {
  render(){
    return <article className="featured">
    <MostSold />
    <BranchMostSold />    
</article>
  }
}

class MostSold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayHelmetImg : arrayHelmetImg
    }
  }
  render(){
    
    
    return (<><section className="featured-items">
    <div className="titleFI">Artículos destacados</div>
    <div className="imagesFI">
        {this.state.arrayHelmetImg.map((x,i)=>{
          return <ItemFeatured title={x[0]} image={x[1]} key={"sold-" + i} />
        })}
       </div>
</section></>)
  }
}

class ItemFeatured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      image : this.props.image
    }
  }
  render(){
    return <> <div className="itemFI">
    <img src={this.state.image} alt="" />
    <p>{this.state.title}</p>
    </div></>
  }
}

class BranchMostSold extends React.Component {
  render(){
    return <><aside className="featured-branch">
    <div className="titleFB">Marcas más vendidas</div>
    <img src="https://1000marcas.net/wp-content/uploads/2021/04/Alpinestars-Logo.png" alt="" />
    <p>Ver todas las marcas</p>
</aside></>
  }
}

class Shop extends React.Component {
  render(){
    return <article className="shop"> 
    <Categories/>
    <Content />
    <div className="bar"></div>
    </article>
  }
}
class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayCat : arrayCat
    }
    
  }
  render(){
   
    return  <aside className="categorys">
    <p>Categorías</p>
    {
      this.state.arrayCat.map((x,i)=>{
        return <Category content={x} key={"cat" + i} />
      })
    }
</aside>
  }
}
class Category extends React.Component {
  render(){
    return <p className="tagC">{this.props.content}</p>
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions : ["Cascos","Chaqueta","Guantes","Pantalones","Botas"],
      arrItems: arrayItems,
      filteredItems: arrayItems
    }
    this.selectOnChange = this.selectOnChange.bind(this);
    
  }
   selectOnChange (e){
    let tempFilter = this.state.arrItems.filter(item => item.type === e.target.value);
    console.log("Antes de setState");
    console.log(tempFilter);
    this.setState({
      filteredItems : tempFilter
    });
    console.log("Despues de setState");
    console.log(this.state.filteredItems);
  }
  render(){
    return <section className="results"> 
    <p>Articulos más vendidos</p>
    <p className="tagC">Ordenar por: 
    <select onChange={this.selectOnChange}>
      {this.state.selectOptions.map((option,i)=>{
        return <option key={i}>{option}</option>
      })}
    </select> 
    </p> 
    <ItemContainer items={this.state.filteredItems}/>
    <PageNav />
    </section>
  }
}
class ItemFilter extends React.Component {
  render(){
    return <p className="tagC">Ordenar por: </p>
  }
}
class ItemContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayItems : this.props.items
    }
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ arrayItems: nextProps.items });  
  }
  render(){
    console.log("Lista de items con array : ");
    console.log(this.state.arrayItems);
    return <div className="list-items">
      {this.state.arrayItems.map((x,i)=>{
        return <Item title={x.title} image={x.image} price={x.price} key={"item" + i} />
      })}
      </div>
  }
}
class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        title : this.props.title,
        image : this.props.image,
        price : this.props.price

    }
    
  }
  render(){
    return <div className="item">
    <p className="item-title">{this.state.title}</p>
    <img src={this.state.image} alt="" />
    <div className="item-bottom">
        <div className="button-buy">Comprar</div>
        <p>{this.state.price}€</p>
    </div>
    </div>
  }
}
class PageNav extends React.Component {
  
    
  
  render(){
    let tempArray = [];
     for (let i = 1; i < 9; i++) {
      if(i === 7){
        tempArray.push(<PageNavItem page="..." key={"page-nav-" + i} />);
      }else if(i === 8){
        tempArray.push(<PageNavItem page="Siguiente" key={"page-nav-" + i} />);
      }else{
        tempArray.push(<PageNavItem page={i} key={"page-nav-" + i} />);
      }
      
    }
   
    return  <div className="page-selection">
     {tempArray.map(element=>element)}
  </div>
  }
}
class PageNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page : this.props.page
    }
    
  }
  render(){
    return <div className="page-item">{this.state.page}</div>
  }
}

class Footer extends React.Component {
  render(){     
    return <footer>
    <MenuFooter />
    <SocialFooter />
    </footer>
  }
}

class MenuFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrItems : arrItems
    }
    
  }
  render(){
 
    return <div className="menu-footer">
      {this.state.arrItems.map((x,i)=>{
        return <ItemMenuFooter text={x} key={"item-menu-" + i} />
      })}
    </div>
  }
}
class ItemMenuFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : this.props.text
    }
    
  }
  render(){
    return <div className="footer-item">{this.state.text}</div>
  }
}
class SocialFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrImages : [images.facebook,images.twitter,images.wifi]
    }
    
  }
  render(){
    return <div className="social-footer">
      {this.state.arrImages.map((x,i)=>{
        return <ItemSocialFooter image={x} key={"item-social-" + i} />
      })}
    </div>
  }
}
class ItemSocialFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : this.props.image
    }
    
  }
  render(){
    return  <img src={this.state.image} alt="" />
  }
}
class MainContainer extends React.Component {
  render(){
    return <><Header />
    <Featured />
    <Shop />
    <Footer />
    </>
  }
}
ReactDOM.render(<MainContainer />,document.getElementById('root'));