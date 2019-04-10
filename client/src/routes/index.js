import StreamList from '../components/Streams/StreamList';
import StreamShow from '../components/Streams/StreamShow';
import StreamCreate from '../components/Streams/StreamCreate';
import StreamEdit from '../components/Streams/StreamEdit';
import StreamDelete from '../components/Streams/StreamDelete';

export const publicRoutes = [
  {
    component: StreamList,
    path: '/',
    exact: true,
    key: 'Stream List'
  },
  {
    component: StreamCreate,
    path: '/streams/new',
    exact: true,
    key: 'Stream Create'
  },
  {
    component: StreamEdit,
    path: '/streams/edit/:id',
    exact: true,
    key: 'Stream Edit'
  },
  {
    component: StreamDelete,
    path: '/streams/delete/:id',
    exact: true,
    key: 'Stream Delete'
  },
  {
    component: StreamShow,
    path: '/streams/:id',
    exact: true,
    key: 'Stream Show'
  }
];
