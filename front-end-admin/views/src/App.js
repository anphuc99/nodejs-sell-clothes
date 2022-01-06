import React, { Component } from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button, Navbar, Entry,NotificationItem } from 'adminlte-2-react';
import Dasboard from './Dasboard';
import path from './path';
import AddProduct from './views/AddProduct';
const { Item, Header, UserPanel, Searchbar } = Sidebar;


class App extends Component {

	sidebar = [
		<Header text='Admin' />,
		<UserPanel username='admin' imageUrl='http://localhost:3001/images/no-avatar.jpg' status='online' />,
		<Searchbar includeButton placeholder='Tìm kiếm' />,

		<Item key="Dasboad" text="Dasboad" icon='fa-tachometer-alt' to='/admin' />,
		<Item key="Product" text="Sản Phẩm" icon='fa-gift'>
			<Item key="ListProduct" text="Danh sách sản phẩm" to={path.ListProduct} />
			<Item key="AddProduct" text="Thêm sản phẩm" to={path.AddProduct} />
		</Item>,
	]

	render() {
		return (
			<AdminLTE
				title={["Shop", "thời trang"]}
				titleShort={["S", "TTr"]}
				theme="blue"
				sidebar={this.sidebar}
			>
				
				<Dasboard path="/admin" exact />
				<AddProduct path={path.AddProduct}/>
			</AdminLTE>
		);
	}
}

export default App;

