import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import { useNavigate } from 'react-router-dom';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',

  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = ({ title, tableHead, list, edit, show }) => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;
  const navigation = useNavigate();
  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>{title}</Title>
        {/* <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select> */}
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              {/* <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Revenue
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1} align="center">
                Action
              </TableCell> */}
              {tableHead.map((ele, index) => (
                <TableCell key={index} sx={{ px: 3 }} colSpan={2} align="center">
                  {ele}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center" margin={'auto'}>
                    <Avatar src={product.imgUrl} align="center" />
                  </Box>
                </TableCell>
                <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>
                  {/* <Box display="flex" alignItems="center">
                    <Avatar src={product.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box> */}
                  {product.name}
                </TableCell>

                <TableCell align="center" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="center" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      // <Small>{product.available} available</Small>
                      <p>available</p>
                    ) : (
                      <p>in stock</p>
                    )
                  ) : (
                    <p>out of stock</p>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={2} align="center">
                  <IconButton onClick={() => navigation(edit)}>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                  <IconButton onClick={() => navigation(show)}>
                    <Icon color="info">visibility</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

// const productList = [
//   {
//     imgUrl: '/assets/images/products/headphone-2.jpg',
//     name: 'earphone',
//     price: 100,
//     available: 15,
//   },
//   {
//     imgUrl: '/assets/images/products/headphone-3.jpg',
//     name: 'earphone',
//     price: 1500,
//     available: 30,
//   },
//   {
//     imgUrl: '/assets/images/products/iphone-2.jpg',
//     name: 'iPhone x',
//     price: 1900,
//     available: 35,
//   },
//   {
//     imgUrl: '/assets/images/products/iphone-1.jpg',
//     name: 'iPhone x',
//     price: 100,
//     available: 0,
//   },
//   {
//     imgUrl: '/assets/images/products/headphone-3.jpg',
//     name: 'Head phone',
//     price: 1190,
//     available: 5,
//   },
// ];

export default TopSellingTable;
