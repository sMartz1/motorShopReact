import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import logo from './images/logo.png';
import images from './images.js';

class Header extends React.Component {
  
  render(){
    const navItemsLeft = ["Inicio","Carretera","Ciudad","Off Road","Trall","Trial","Casual","Accesorios"];
    const navItemsRight =["Ayuda","Nuestras tiendas","Contacto"];
    return (
      <header>
        <div className="headSup">
          <div className="logo">
            <h1>MOTO</h1>
            <p>SHOP</p>
            <img src={logo} alt="" />
          </div>
          <NavBar classNav="menuSup" items={navItemsRight}/>
         
        </div>
        <NavBar items={navItemsLeft} />
        </header>
    );
  }
}
class NavBar extends React.Component {
  render(){
    
    if(this.props.classNav === "menuSup"){
      console.log("in")
      return <><div className="menuSup">
        {
          this.props.items.map((x,i)=>{
            return <div className="nav-item" key={"aMenu" + i}>{x}</div>
          })
        }
        </div></>
    }else{
      return <><nav>
        {
          this.props.items.map((x,i)=>{
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
  render(){
    let arrayHelmetImg =  [
      ["AGV Skyline Block",images.casco1],
      ["Schuberth SR1",images.casco2],
      ["Arai Quantum DNA",images.casco3],
      ["Shoei XR1100 Enigm TC-4",images.casco4]];
    
    return (<><section className="featured-items">
    <div className="titleFI">Artículos destacados</div>
    <div className="imagesFI">
        {arrayHelmetImg.map((x,i)=>{
          return <ItemFeatured title={x[0]} image={x[1]} key={"sold-" + i} />
        })}
       </div>
</section></>)
  }
}

class ItemFeatured extends React.Component {
  render(){
    return <> <div className="itemFI">
    <img src={this.props.image} alt="" />
    <p>{this.props.title}</p>
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
  render(){
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
      "Baterías"
      ]
    return  <aside className="categorys">
    <p>Categorías</p>
    {
      arrayCat.map((x,i)=>{
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
  render(){
    return <section className="results"> 
    <p>Articulos más vendidos</p>
    <ItemFilter />
    <ItemContainer />
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

  render(){
    let arrayItems = [
      {
        title:"Alpinestars GP-PRO",
        image:images.item1,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item2,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item3,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item4,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item5,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item6,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item7,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item8,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item9,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item10,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item11,
        price:55
      },
      {
        title:"Alpinestars GP-PRO",
        image:images.item12,
        price:55
      }
    ]
    return <div className="list-items">
      {arrayItems.map((x,i)=>{
        return <Item title={x.title} image={x.image} price={x.price} key={"item" + i} />
      })}
      </div>
  }
}
class Item extends React.Component {
  render(){
    return <div className="item">
    <p className="item-title">{this.props.title}</p>
    <img src={this.props.image} alt="" />
    <div className="item-bottom">
        <div className="button-buy">Comprar</div>
        <p>{this.props.price}€</p>
    </div>
    </div>
  }
}
class PageNav extends React.Component {
  render(){
    return  <div className="page-selection">
      {Array(9).fill(1).map((x,i)=>{
        if(i === 7){
          return <PageNavItem page="..." key={"page-nav-" + i} />
        }else if(i === 8){
          return <PageNavItem page="Siguiente" key={"page-nav-" + i} />
        }else{
          return <PageNavItem page={i} key={"page-nav-" + i} />
        }
      })}
</div>
  }
}
class PageNavItem extends React.Component {
  render(){
    return <div className="page-item">{this.props.page}</div>
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
  render(){
    let arrItems = [
      "Aviso legal",
      "Política de privacidad",
      "Gastos de envío",
      "Sistemas de pago",
      "Plazos de entrega",
      "Devoluciones"];
    return <div className="menu-footer">
      {arrItems.map((x,i)=>{
        return <ItemMenuFooter text={x} key={"item-menu-" + i} />
      })}
    </div>
  }
}
class ItemMenuFooter extends React.Component {
  render(){
    return <div className="footer-item">{this.props.text}</div>
  }
}
class SocialFooter extends React.Component {
  render(){
    let arrImages = [images.facebook,images.twitter,images.wifi]
    return <div className="social-footer">
      {arrImages.map((x,i)=>{
        return <ItemSocialFooter image={x} key={"item-social-" + i} />
      })}
    </div>
  }
}
class ItemSocialFooter extends React.Component {
  render(){
    return  <img src={this.props.image} alt="" />
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