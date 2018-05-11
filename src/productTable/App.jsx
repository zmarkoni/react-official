import React from 'react';

// https://reactjs.org/docs/thinking-in-react.html
/* Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. This is easy. Components that appear within another component in the mock should appear as a child in the hierarchy:
MOC :  https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png
FilterableProductTable
    SearchBar
    ProductTable
        ProductCategoryRow
        ProductRow
*/

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in the stock
                </p>
            </form>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product,
              name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows=[];
        let lastCategory;

        // unresolve variable products ???  a radi !!!
        this.props.products.forEach((product) => {
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }

            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
               <SearchBar />
               <ProductTable products={this.props.products} />
            </div>
        );
   }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export class App extends React.Component {
    render() {
        return (
            <div>
                <FilterableProductTable products={PRODUCTS} />
            </div>
        );
   }
}