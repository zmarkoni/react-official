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


/*
===== Set up the state : =============
// !Important -> Local state is exactly that: a feature available only to classes.

Think of all of the pieces of data in our example application. We have:
    The original list of products           -> not state (The original list of products is passed in as props)
    The search text the user has entered    -> it is state (can change over time and can’t be computed from anything)
    The value of the checkbox               -> it is state (can change over time and can’t be computed from anything)
    The filtered list of products           -> not state ( it can be computed by combining the original list of products with the search text and value of the checkbox)

Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:
    1.Is it passed in from a parent via props? If so, it probably isn’t state.
    2.Does it remain unchanged over time? If so, it probably isn’t state.
    3.Can you compute it based on any other state or props in your component? If so, it isn’t state.

    So finally, our state is:
        The search text the user has entered
        The value of the checkbox
 */

/*
===== Identify Where Your State Should Live ======

For each piece of state in your application:
    1.Identify every component that renders something based on that state.
    2.Find a common owner component (a single component above all the components that need the state in the hierarchy).
    3.Either the common owner or another component higher up in the hierarchy should own the state.
    4.If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state
      and add it somewhere in the hierarchy above the common owner component.
 */

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
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows=[];
        let lastCategory;

        // unresolve variable products ???  a radi !!!
        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1) {
                return;
            }
            if(inStockOnly && !product.stocked) {
                return;
            }

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

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    {' '}
                    Only show products in the stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
            }
        )
    }

    handleInStockChange(inStockOnly) {
        this.setState({
                inStockOnly: inStockOnly
            }
        )
    }

    render() {
        return (
            <div>
               <SearchBar
                   filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   onFilterTextChange={this.handleFilterTextChange}
                   onInStockChange={this.handleInStockChange}
               />
               <ProductTable
                   products={this.props.products}
                   filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
               />
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