class ProductManager {
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock ){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code) {
                console.log(`Estas intentando ingresar un arreglo con productos que contiene el codigo ${code} repetido`);
                break;
            }
            
        }  

        const newProduct = {
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock, 
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({ 
                ...newProduct,
                id: ProductManager.id,
            });
                console.log( "Ingresaste un arreglo y se registro correctamente" );
        }else{
            console.log("Estas intentando ingresar un arreglo al que le falta un campo o tiene un campo repetido, todos los campos son requeridos")
        }

        
    }

    getProduct(){ 
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
        
    }
}

const productos = new ProductManager()

//arreglo vacio po que no se ha agregado nada aun
//console.log(productos.getProduct());  

//agregando los productos 
productos.addProduct("Metallica", "Grupo de rock", 15000, "url concierto", "123abc", 1)
productos.addProduct("Iron Maiden", "Grupo de rock UK", 10000, "url Banda", "123xyz", 10)

//agregando producto con code repetido 
productos.addProduct("Kraken", "Grupo de rock en español", 20000, "url tributo", "123abc")

//agregando producto al que le falta un campo 
productos.addProduct("Kraken", "Grupo de rock en español", 20000, "123abc")

//arreglo con productos 
console.log(productos.getProduct());  

//Busqueda de producto por id
productos.getProductById(7)
console.log("Esto corresponde a la busqueda por id, 1- Not found en caso de no estar creado 2- ultimo arreglo coincide con id buscado")