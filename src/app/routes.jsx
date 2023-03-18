import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import Brands from './pages/Brands/Brands';
import Categories from './pages/categories/Categories';
import CategoryDetails from './pages/categories/CategoryDetails';
import EditCategory from './pages/categories/EditCategory';
import EditEmployee from './pages/employees/EditEmployee';
import EmployeeDetails from './pages/employees/EmployeeDetails';
import Employees from './pages/employees/Employees';
import Home from './pages/home/Home';
import EditMyShop from './pages/myShop/EditMyShop';
import MyShop from './pages/myShop/MyShop';
import EditProducts from './pages/products/EditProducts';
import ProductDetails from './pages/products/ProductDetails';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import JwtLogin from './views/sessions/JwtLogin';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    // children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productID', element: <ProductDetails /> },
      { path: '/products/editProduct', element: <EditProducts /> },
      { path: '/brands', element: <Brands /> },
      { path: '/employees', element: <Employees /> },
      { path: '/employees/:employeeID', element: <EmployeeDetails /> },
      { path: '/employees/editEmployee', element: <EditEmployee /> },
      { path: '/categories', element: <Categories /> },
      { path: '/categories/:categoryID', element: <CategoryDetails /> },
      { path: '/categories/editCategory', element: <EditCategory /> },
      { path: '/services', element: <Services /> },
      { path: '/myShop', element: <MyShop /> },
      { path: '/edit-myShop', element: <EditMyShop /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  ...sessionRoutes,
  // { path: '/', element: <Navigate to="dashboard/default" /> },
  // { path: '/', element: <Home /> },
  // { path: '/products', element: <Products /> },
  // { path: '/brands', element: <Brands /> },
  // { path: '/employees', element: <Employees /> },
  // { path: '/categories', element: <Categories /> },
  // { path: '/services', element: <Services /> },
  // { path: '/myShop', element: <MyShop /> },
  // { path: '*', element: <NotFound /> },
];

export default routes;
