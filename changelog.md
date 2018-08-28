# Changelog

### At Task 1 were added:

* Created model of Product 
* Created Product, ProductList, Cart components
* Added services to provide product and cart data
* Added ability to add product to cart

### At Task 2 were added:

* Created several Modules
  - AppModule, 
  - CartModule, 
  - ProductsModule, 
  - OrdersModule, 
  - CoreModule   
  - SharedModule 
* Add ability to add/delete/change quantity of products 
* Calculate total quantity and amount on cart
* Add styles

### At Task 3 were added:
  * Update CartService with required functionality
  compare to Task2 (e.g. clear all products)
  * Implemented following services (added to CoreModule and used in ContactUsComponent)
    - LocalStorage 
    - ConfigOptions
    - Constants
    - Generator
  * Added ColorByText directive and used in ProductComponent
  
### At Task 4 were added:
  * Applied 3 built-in filters:
    - uppercase pipe for category in products list
    - date pipe in cart for last updates
    - currency pipe for price 
  
  * ProductService return products as promise
  * Added OrderByPipe pipe to ShareModule and
   applied to products list and to cart list of product
   with ability to change sorting property  
    
 
    
