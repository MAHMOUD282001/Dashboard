// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import { Card, Grid, styled, useTheme } from '@mui/material';
import { MatxLayout } from 'app/components';
import Layout1 from 'app/components/MatxLayout/Layout1/Layout1';
import Layout1Sidenav from 'app/components/MatxLayout/Layout1/Layout1Sidenav';
import Layout1Topbar from 'app/components/MatxLayout/Layout1/Layout1Topbar';
import useHttp from 'app/hooks/use-http';
import { Fragment, useEffect } from 'react';
// import Campaigns from './shared/Campaigns';
// import DoughnutChart from './shared/Doughnut';
// import RowCards from './shared/RowCards';
import StatCards from '../../views/dashboard/shared/StatCards';
import StatCards2 from '../../views/dashboard/shared/StatCards2';
import TopSellingTable from '../../views/dashboard/shared/TopSellingTable';
import UpgradeCard from '../../views/dashboard/shared/UpgradeCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const { palette } = useTheme();

  const tableHead = ['Image', 'Name', 'Revenue', 'Stock Status', 'Action'];
  const productList = [
    {
      imgUrl: '/assets/images/products/headphone-2.jpg',
      name: 'earphone1',
      price: 100,
      available: 15,
    },
    {
      imgUrl: '/assets/images/products/headphone-3.jpg',
      name: 'earphone2',
      price: 1500,
      available: 30,
    },
    {
      imgUrl: '/assets/images/products/iphone-2.jpg',
      name: 'iPhone x1',
      price: 1900,
      available: 35,
    },
    {
      imgUrl: '/assets/images/products/iphone-1.jpg',
      name: 'iPhone x2',
      price: 100,
      available: 0,
    },
    {
      imgUrl: '/assets/images/products/headphone-3.jpg',
      name: 'Head phone',
      price: 1190,
      available: 5,
    },
  ];
  const { isLoading, error, requestFn } = useHttp();
  // ////
  const getUserApi = 'https://abdjan.everest-ci.com/api/users';
  useEffect(() => {
    const transformData = (data) => {
      console.log(data);
    };
    requestFn(
      {
        url: getUserApi,
      },
      transformData
    );
  }, [requestFn, getUserApi]);
  // const getUsers = async () => {
  // const response = fetch(`http://localhost:8000/api/users`);
  // const responseData = response.json();
  // console.log(responseData);
  // };
  // getUsers();
  // ////
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable
              title="top selling products"
              tableHead={tableHead}
              list={productList}
              edit={'/products/editProduct'}
              show={'/products/product1'}
            />
            {/* <StatCards2 /> */}

            {/* <H4>Ongoing Projects</H4>
            <RowCards /> */}
          </Grid>

          {/* <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid> */}
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Home;
