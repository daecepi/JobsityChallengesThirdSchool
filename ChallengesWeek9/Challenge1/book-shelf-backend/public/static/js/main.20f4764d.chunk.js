(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    166: function(e, t, a) {
      e.exports = a.p + 'static/media/logo.b5877b5e.svg';
    },
    172: function(e, t, a) {
      e.exports = a(379);
    },
    177: function(e, t, a) {},
    181: function(e, t, a) {},
    183: function(e, t, a) {},
    191: function(e, t, a) {},
    192: function(e, t, a) {},
    193: function(e, t, a) {},
    194: function(e, t, a) {},
    199: function(e, t, a) {},
    200: function(e, t, a) {},
    201: function(e, t, a) {},
    244: function(e, t, a) {},
    245: function(e, t, a) {},
    249: function(e, t, a) {},
    377: function(e, t, a) {},
    379: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        o = a.n(n),
        r = a(20),
        s = a.n(r),
        l = (a(177), a(9)),
        c = a(10),
        i = a(12),
        u = a(11),
        m = a(13),
        p = a(163),
        d = a(38),
        h = a(28),
        g = a(55),
        f = a(78),
        b = 'GET_BOOK_SUCCESS',
        v = 'GET_BOOK_PENDING',
        E = 'GET_BOOKS_ERROR',
        k = 'RECOVER_USER_DATA',
        y = {
          auth: { isAuth: !1, user: {} },
          books: [],
          baseEndpoint: 'http://localhost:5000/books',
          actualPage: 0,
          totalPageCount: 0,
          searchWords: '',
          lendBook: !1,
          showModal: '',
          bookToOperateIn: void 0,
        },
        O = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case v:
              return console.log('in book pending'), Object.assign({}, e, { pending: !0 });
            case E:
              return Object.assign({}, e, { error: t.payload.error, pending: !1 });
            case b:
              return Object.assign({}, e, { books: t.payload.books, pending: !1 });
            case 'LEND_BOOK':
              return e;
            case 'RETURN_BOOK':
              return Object.assign({}, e, { pending: !0 });
            case k:
              return Object.assign({}, e, { auth: { user: t.payload.user } });
            default:
              return e;
          }
        },
        N = Object(f.b)(O),
        j = (a(181), a(18)),
        C = a.n(j),
        w = a(30);
      a(183);
      var B = a(108),
        S = a.n(B),
        x = (a(123), a(191), a(166)),
        I = a.n(x),
        T =
          (a(192),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}),
                (a.handleChange = function(e) {
                  a.props.onChange && a.props.onChange(e.target.value);
                }),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.name,
                      a = e.type,
                      n = e.placeholder,
                      r = e.iconClasses;
                    return o.a.createElement(
                      'div',
                      { className: 'inputWithIcon' },
                      o.a.createElement('input', {
                        type: a,
                        name: t,
                        className: 'normal-size',
                        placeholder: n,
                        onChange: this.handleChange,
                      }),
                      r ? o.a.createElement('i', { className: r, 'aria-hidden': 'true' }) : '',
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        P = (function(e) {
          function t() {
            var e, a;
            Object(l.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}), a;
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.logout;
                  return o.a.createElement(
                    'header',
                    { className: 'header' },
                    o.a.createElement(
                      'div',
                      { className: 'logo' },
                      o.a.createElement('img', { src: I.a, className: 'image-logo', alt: 'logo' }),
                    ),
                    o.a.createElement(
                      'div',
                      { className: 'search-bar' },
                      o.a.createElement('p', null, 'Bookshelf'),
                      o.a.createElement(T, {
                        type: 'text',
                        placeholder: 'Search..',
                        onChange: this.props.handleSearch,
                        iconClasses: 'fas fa-search',
                      }),
                    ),
                    o.a.createElement(
                      'div',
                      { className: 'borderx' },
                      o.a.createElement(
                        'div',
                        { className: 'user' },
                        o.a.createElement(
                          'div',
                          { className: 'user-box' },
                          o.a.createElement(
                            'div',
                            { className: 'user-elements' },
                            o.a.createElement('p', { id: 'user-name' }, 'Matt Barrera'),
                            o.a.createElement('i', { className: 'fa fa-chevron-down fa-xs' }),
                            o.a.createElement(
                              'div',
                              { className: 'profile-container' },
                              o.a.createElement('img', {
                                className: 'profile-pic',
                                src:
                                  'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg',
                                alt: '',
                              }),
                            ),
                          ),
                          o.a.createElement(
                            'div',
                            { id: 'dropdown', className: 'ddmenu' },
                            o.a.createElement(
                              'ul',
                              null,
                              o.a.createElement('li', null, o.a.createElement('button', null, 'Profile')),
                              o.a.createElement('li', null, o.a.createElement('button', null, 'Books saved')),
                              o.a.createElement('li', null, o.a.createElement('button', null, 'Account Settings')),
                              o.a.createElement('li', null, o.a.createElement('button', { onClick: e }, 'Log Out')),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        D =
          (a(193),
          a(194),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                  selectedItemIndex: 0,
                  sections: [
                    {
                      label: 'Main',
                      items: [
                        { index: 1, section: 'Quito', to: '/city/quito', logoClasses: 'fas fa-globe', isSelected: !1 },
                        {
                          index: 2,
                          section: 'Cartagena',
                          to: '/city/cartagena',
                          logoClasses: 'fas fa-globe',
                          isSelected: !1,
                        },
                        {
                          index: 3,
                          section: 'Medell\xedn',
                          to: '/city/medellin',
                          logoClasses: 'fas fa-globe',
                          isSelected: !1,
                        },
                        {
                          index: 4,
                          section: 'Digital',
                          to: '/type/digital',
                          logoClasses: 'fas fa-tablet-alt',
                          isSelected: !1,
                        },
                        {
                          index: 5,
                          section: 'Hardcover',
                          to: '/type/hardcover',
                          logoClasses: 'fas fa-book',
                          isSelected: !1,
                        },
                        {
                          index: 6,
                          section: 'Personal Loans',
                          to: '/user/loans',
                          logoClasses: 'fas fa-user-tag',
                          isSelected: !1,
                        },
                      ],
                    },
                    {
                      label: 'Your Books',
                      items: [
                        {
                          index: 7,
                          section: 'Readings',
                          to: '/user/:id/readings',
                          logoClasses: 'fas fa-book-open',
                          isSelected: !1,
                        },
                        {
                          index: 8,
                          section: 'History',
                          to: '/user/:id/history',
                          logoClasses: 'fas fa-history',
                          isSelected: !1,
                        },
                        {
                          index: 9,
                          section: 'Read Later',
                          to: '/user/:id/later',
                          logoClasses: 'fas fa-bookmark',
                          isSelected: !1,
                        },
                        {
                          index: 10,
                          section: 'Favorites',
                          to: '/user/:id/favorites',
                          logoClasses: 'fas fa-heart',
                          isSelected: !1,
                        },
                      ],
                    },
                  ],
                }),
                (a.changeLocation = function(e) {
                  window.location = e;
                }),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return o.a.createElement(
                      'div',
                      { className: 'menu-left' },
                      o.a.createElement(
                        'div',
                        { className: 'menu-box' },
                        this.state.sections.map(function(t) {
                          return o.a.createElement(
                            'div',
                            { key: t.label, className: 'menu-box' },
                            o.a.createElement('p', null, t.label),
                            o.a.createElement(
                              'ul',
                              { key: t.label },
                              t.items.map(function(t) {
                                return o.a.createElement(
                                  h.b,
                                  { key: t.index, to: t.to },
                                  o.a.createElement(
                                    'li',
                                    {
                                      onClick: function() {
                                        e.changeLocation(t.to);
                                      },
                                      className: t.to === e.props.resource ? 'selected' : '',
                                    },
                                    o.a.createElement('i', { className: t.logoClasses }),
                                    o.a.createElement(
                                      'button',
                                      { className: t.to === e.props.resource ? 'selected' : 'element' },
                                      t.section,
                                    ),
                                  ),
                                );
                              }),
                            ),
                          );
                        }),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        L = a(171),
        A = (a(196), a(197), a(198), a(52)),
        _ = a.n(A),
        R =
          (a(199),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}), a;
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.title,
                      a = e.authors,
                      n = e.release,
                      r = e.description,
                      s = e.averageRating,
                      l = e.pageCount;
                    return o.a.createElement(
                      'div',
                      { className: 'general-hover-container' },
                      o.a.createElement(
                        'div',
                        { className: 'hover-desc' },
                        o.a.createElement('p', { className: 'blue-hover-text' }, t),
                        o.a.createElement(
                          'p',
                          { className: 'gray-hover-text left-gap' },
                          'undefined' !== typeof n && n.indexOf >= '-' ? n.split('-')[0] : n,
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        { className: 'authors-container' },
                        o.a.createElement('p', { className: 'white-hover-text' }, 'Novel by'),
                        o.a.createElement('p', { className: 'gray-hover-text' }, a.join(',')),
                      ),
                      o.a.createElement('div', null, o.a.createElement('p', null, l)),
                      o.a.createElement(
                        'div',
                        null,
                        o.a.createElement('p', { className: 'gray-hover-text' }, 'SUMARY: '),
                        o.a.createElement(
                          'p',
                          null,
                          'undefined' !== typeof r && r.length >= 250 ? r.substr(0, 250) : r,
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        null,
                        o.a.createElement('p', { className: 'gray-hover-text' }, 'RATING: '),
                        o.a.createElement(_.a, { name: t, starCount: 5, starColor: '#60B5D6', value: s }),
                      ),
                      o.a.createElement('div', null),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        M =
          (a(200),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}), a;
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return o.a.createElement(
                      'div',
                      { onClick: this.props.changeToogle, className: this.props.styles },
                      o.a.createElement(
                        'div',
                        { className: 'top-book-menu-con' },
                        o.a.createElement(
                          'div',
                          { onClick: this.handleClick, className: 'favorites-container' },
                          o.a.createElement('i', { className: 'fas fa-heart' }),
                        ),
                        o.a.createElement(
                          'div',
                          {
                            onClick: function() {
                              e.props.setBookToOperate(e.props.book);
                            },
                            className: 'read-later-container',
                          },
                          o.a.createElement('i', { className: 'fas fa-bookmark' }),
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        { className: 'mid-book-menu-con' },
                        o.a.createElement(
                          'div',
                          { onClick: this.handleClick, className: 'readings-container' },
                          o.a.createElement('i', { className: 'fas fa-book-open' }),
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        { className: 'bottom-book-menu-con' },
                        o.a.createElement(_.a, {
                          name: 'user-rating' + this.props.id,
                          starCount: 5,
                          value: this.props.averageRating,
                          editing: !0,
                        }),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        F =
          (a(201),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                  toggle: !0,
                  styles: 'book-menu-container',
                }),
                (a.toggleAppereance = function(e) {
                  a.state.toggle && a.setState({ toggle: !1, styles: 'book-menu-container occult-class' });
                }),
                (a.changeToogle = function() {
                  a.setState({ toggle: !0, styles: 'book-menu-container' });
                }),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.book,
                      t = e._id,
                      a = e.title,
                      n = e.description,
                      r = e.imageLinks,
                      s = e.authors,
                      l = e.averageRating,
                      c = e.publishedDate;
                    return o.a.createElement(
                      L.a,
                      {
                        content: o.a.createElement(R, {
                          title: a,
                          release: c,
                          description: n,
                          authors: s,
                          averageRating: l,
                        }),
                        placement: 'right',
                        theme: 'bootstrap',
                        offset: 0,
                        hideOnClick: !0,
                      },
                      o.a.createElement(
                        'div',
                        { className: 'book' },
                        o.a.createElement(
                          'div',
                          { className: 'image-container' },
                          o.a.createElement('img', {
                            id: t,
                            className: 'img-ref',
                            onClick: this.toggleAppereance,
                            src: r.smallThumbnail
                              ? r.smallThumbnail
                              : 'https://www.union.edu/sites/default/files/union-marketing-layer/201803/picture.jpg',
                            alt: 'presentation',
                          }),
                          o.a.createElement(M, {
                            id: t + 'menu',
                            book: this.props.book,
                            averageRating: l,
                            styles: this.state.styles,
                            changeToogle: this.changeToogle,
                            setBookToOperate: this.props.setBookToOperate,
                          }),
                        ),
                        o.a.createElement('p', { className: 'book-title' }, a),
                        o.a.createElement('p', { className: 'authors' }, s.join(', ')),
                        o.a.createElement(
                          'div',
                          { className: 'rating-container' },
                          o.a.createElement(_.a, {
                            name: 'rate' + t,
                            starCount: 5,
                            starColor: '#60B5D6',
                            emptyStarColor: '#F0F0F0',
                            value: l,
                          }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        U = (function(e) {
          function t() {
            var e, a;
            Object(l.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (
              ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}),
              (a.handleRight = function() {
                var e = a.props,
                  t = e.totalPages,
                  n = e.actualPage;
                n + 1 !== t ? a.props.handlePagination(n + 1) : alert('You are already at the end of the list');
              }),
              (a.handleLeft = function() {
                var e = a.props.actualPage;
                0 !== e ? a.props.handlePagination(e - 1) : alert('You are already at the start of the list');
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  console.log(this.props);
                  var t = this.props.books;
                  return o.a.createElement(
                    'div',
                    { className: 'section-1' },
                    o.a.createElement(D, {
                      resource: this.props.resource,
                      getBooksByType: this.props.getBooksByType,
                      getBooksByCity: this.props.getBooksByCity,
                    }),
                    o.a.createElement(
                      'div',
                      { className: 'content' },
                      o.a.createElement(
                        'div',
                        { className: 'listing-manipulator' },
                        o.a.createElement('h2', null, 'New Releases'),
                        o.a.createElement(
                          'div',
                          { className: 'content-filter-box' },
                          o.a.createElement(
                            'p',
                            null,
                            o.a.createElement('a', { href: '../../../public/index.html' }, 'Release Date'),
                            ' |',
                            ' ',
                            o.a.createElement('a', { href: '../../../public/index.html' }, 'Popularity'),
                          ),
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'layout-form-box' },
                          o.a.createElement('i', { className: 'fa fa-th-large' }),
                          o.a.createElement('i', { className: 'fa fa-th-list' }),
                          o.a.createElement('p', null, '| pages'),
                          o.a.createElement('i', { onClick: this.handleLeft, className: 'fas fa-chevron-left i-hov' }),
                          o.a.createElement('i', {
                            onClick: this.handleRight,
                            className: 'fas fa-chevron-right i-hov',
                          }),
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        { id: 'book-container', className: 'books' },
                        t.map(function(t) {
                          return o.a.createElement(F, {
                            key: t._id,
                            book: t,
                            setBookToOperate: e.props.setBookToOperate,
                          });
                        }),
                      ),
                    ),
                    o.a.createElement(
                      'div',
                      { className: 'menu-right' },
                      o.a.createElement(
                        'div',
                        { className: 'menu-box' },
                        o.a.createElement('p', null, 'MOST READ BOOKS'),
                        o.a.createElement(
                          'ol',
                          null,
                          o.a.createElement(
                            'li',
                            { key: '1' },
                            o.a.createElement(
                              'a',
                              { href: '../../../public/index.html' },
                              'Hooked: How To Build Habit forming Products.',
                            ),
                          ),
                          o.a.createElement(
                            'li',
                            { key: '2' },
                            o.a.createElement(
                              'a',
                              { href: '../../../public/index.html' },
                              'The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future',
                            ),
                          ),
                          o.a.createElement(
                            'li',
                            { key: '3' },
                            o.a.createElement(
                              'a',
                              { href: '../../../public/index.html' },
                              'Lean In: Women, Work, and the Will to Lead.',
                            ),
                          ),
                          o.a.createElement(
                            'li',
                            { key: '4' },
                            o.a.createElement(
                              'a',
                              { href: '../../../public/index.html' },
                              'Building a Bussiness When There Are Not Easy Answers.',
                            ),
                          ),
                          o.a.createElement(
                            'li',
                            { key: '5' },
                            o.a.createElement('a', { href: '../../../public/index.html' }, 'How Google Works'),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        W = Object(g.b)(
          function(e) {
            return { books: e.books };
          },
          function(e) {
            return {};
          },
        )(U),
        G = a(118),
        z = a.n(G),
        q =
          (a(243),
          a(244),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                  startDate: new Date(),
                  endDate: new Date(),
                }),
                (a.setStartDate = function(e) {
                  a.setState({ startDate: e });
                }),
                (a.setEndDate = function(e) {
                  a.setState({ endDate: e });
                }),
                (a.handleSubmit = function(e) {
                  e.preventDefault();
                  var t = a.state,
                    n = t.startDate,
                    o = t.endDate;
                  console.log(n.toString(), o.toString());
                }),
                (a.handleClose = function(e) {
                  e.preventDefault(), a.props.returnModalBack();
                }),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return o.a.createElement(
                      'div',
                      { className: 'reservation-container' },
                      o.a.createElement(
                        'div',
                        { className: 'medium-container' },
                        o.a.createElement(
                          'div',
                          { onClick: this.handleClose, className: 'close-container' },
                          o.a.createElement('p', null, 'X'),
                        ),
                        o.a.createElement('h1', null, 'ReservationProccess'),
                        o.a.createElement(
                          'div',
                          { className: 'internal-separator' },
                          o.a.createElement(z.a, {
                            selected: new Date(),
                            onChange: function(t) {
                              return e.setStartDate(t);
                            },
                            selectsStart: !0,
                            minDate: new Date(),
                            maxDate: new Date().getDate() + 15,
                            dateFormat: 'MMMM d, yyyy h:mm aa',
                            showDisabledMonthNavigation: !0,
                          }),
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'internal-separator' },
                          o.a.createElement(z.a, {
                            onChange: function(t) {
                              return e.setEndDate(t);
                            },
                            selectsEnd: !0,
                            minDate: new Date(),
                            maxDate: new Date().getDate() + 15,
                            dateFormat: 'MMMM d, yyyy h:mm aa',
                            showDisabledMonthNavigation: !0,
                          }),
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'button-container' },
                          o.a.createElement('input', {
                            type: 'submit',
                            className: 'form-button',
                            onSubmit: this.handleSubmit,
                            value: 'save reservation',
                          }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        H = (function(e) {
          function t() {
            var e, a;
            Object(l.a)(this, t);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
            return (
              ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(r)))).state = {
                baseEndpoint: 'http://localhost:5000/books',
                actualPage: 0,
                totalPageCount: 0,
                searchWords: '',
                books: [],
                lendBook: !1,
                showModal: '',
                bookToOperateIn: void 0,
              }),
              (a.displayNotification = function(e) {
                a.refs.notificationAlert.notificationAlert({
                  place: 'br',
                  message: o.a.createElement('div', { className: 'notification-container' }, e),
                  type: 'danger',
                  icon: 'now-ui-icons ui-1_bell-53',
                  autoDismiss: 2,
                  closeButton: !1,
                });
              }),
              (a.fetchBooks = (function() {
                var e = Object(w.a)(
                  C.a.mark(function e(t, n) {
                    var o,
                      r,
                      s,
                      l,
                      c,
                      i,
                      u = arguments;
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              o = t + '?page=' + n, r = u.length, s = new Array(r > 2 ? r - 2 : 0), l = 2;
                              l < r;
                              l++
                            )
                              s[l - 2] = u[l];
                            return (
                              s.city && (o += '&city=' + a.capitalizeFLetter(s.city)),
                              s.type && (o += '&type=' + a.capitalizeFLetter(s.type)),
                              s.words && (o += '&words=' + a.capitalizeFLetter(s.words)),
                              console.log(o),
                              (c = localStorage.getItem('access_token')),
                              (e.next = 9),
                              fetch(o, { method: 'GET', headers: { Authorization: 'Bearer ' + c } }).then(function(e) {
                                return e.json();
                              })
                            );
                          case 9:
                            400 === (i = e.sent)
                              ? alert(i.message)
                              : 401 === i.statusCode
                              ? localStorage.removeItem('access_token')
                              : 'Success' === i.state &&
                                (a.props.getBooksSuccess(i.books),
                                a.setState({
                                  actualPage: i.pageNumber - 1,
                                  totalPageCount: i.totalPages,
                                  resource: '/',
                                  books: i.books,
                                }));
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(t, a) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.handlePagination = function(e) {
                switch (a.props.match.path) {
                  case '/':
                    a.getBooks(e);
                    break;
                  case '/city/:name':
                    var t = a.props.match.params.name;
                    a.getBooksByCity(t, e);
                    break;
                  case '/type/:name':
                    var n = a.props.match.params.name;
                    console.log(n), a.getBooksByType(n, e);
                }
              }),
              (a.getBooks = Object(w.a)(
                C.a.mark(function e() {
                  var t,
                    n,
                    o,
                    r = arguments;
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.length > 0 && void 0 !== r[0] ? r[0] : 0),
                            (n = localStorage.getItem('access_token')),
                            console.log('entre en books'),
                            a.props.getBooksPending(),
                            (e.next = 6),
                            fetch('http://localhost:5000/books?startIndex='.concat(t), {
                              method: 'GET',
                              headers: { Authorization: 'Bearer ' + n },
                            }).then(function(e) {
                              return e.json();
                            })
                          );
                        case 6:
                          400 === (o = e.sent)
                            ? alert(o.message)
                            : 'Success' === o.state &&
                              (a.props.getBooksSuccess(o.books),
                              a.setState({
                                actualPage: o.pageNumber - 1,
                                totalPageCount: o.totalPages,
                                resource: '/',
                                books: o.books,
                              }));
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              (a.getBooksByType = (function() {
                var e = Object(w.a)(
                  C.a.mark(function e(t) {
                    var n,
                      o,
                      r,
                      s,
                      l = arguments;
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = l.length > 1 && void 0 !== l[1] ? l[1] : 0),
                              (o = a.capitalizeFLetter(t)),
                              (r = localStorage.getItem('access_token')),
                              (e.next = 5),
                              fetch('http://localhost:5000/books?startIndex='.concat(n, '&type=').concat(o), {
                                method: 'GET',
                                headers: { Authorization: 'Bearer ' + r },
                              }).then(function(e) {
                                return e.json();
                              })
                            );
                          case 5:
                            (s = e.sent),
                              console.log(s),
                              400 === s.statusCode
                                ? alert(s.message)
                                : 401 === s.statusCode
                                ? localStorage.removeItem('access_token')
                                : 'Success' === s.state &&
                                  a.setState({
                                    actualPage: s.pageNumber - 1,
                                    totalPageCount: s.totalPages,
                                    resource: '/type/'.concat(t),
                                    books: s.books,
                                  });
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.getBooksByCity = (function() {
                var e = Object(w.a)(
                  C.a.mark(function e(t) {
                    var n,
                      o,
                      r,
                      s,
                      l = arguments;
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = l.length > 1 && void 0 !== l[1] ? l[1] : 0),
                              (o = a.capitalizeFLetter(t)),
                              (r = localStorage.getItem('access_token')),
                              (e.next = 5),
                              fetch('http://localhost:5000/books?startIndex='.concat(n, '&city=').concat(o), {
                                method: 'GET',
                                headers: { Authorization: 'Bearer ' + r },
                              }).then(function(e) {
                                return e.json();
                              })
                            );
                          case 5:
                            400 === (s = e.sent)
                              ? alert(s.message)
                              : 401 === s.statusCode
                              ? localStorage.removeItem('access_token')
                              : 'Success' === s.state &&
                                a.setState({
                                  actualPage: s.pageNumber - 1,
                                  totalPageCount: s.totalPages,
                                  resource: '/city/'.concat(t),
                                  books: s.books,
                                });
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.getBooksByWords = Object(w.a)(
                C.a.mark(function e() {
                  var t,
                    n,
                    o,
                    r = arguments;
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.length > 0 && void 0 !== r[0] ? r[0] : 0),
                            (n = localStorage.getItem('access_token')),
                            (e.next = 4),
                            fetch(
                              'http://localhost:5000/books?startIndex='.concat(t, '&words=').concat(a.state.words),
                              { method: 'GET', headers: { Authorization: 'Bearer ' + n } },
                            ).then(function(e) {
                              return e.json();
                            })
                          );
                        case 4:
                          400 === (o = e.sent)
                            ? alert(o.message)
                            : 401 === o.statusCode
                            ? localStorage.removeItem('access_token')
                            : a.setState({ books: o });
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              (a.setBookToOperate = function(e) {
                a.setState({ bookToOperateIn: e, lendBook: !0 });
              }),
              (a.returnModalBack = function() {
                a.setState({ lendBook: !1 });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  if (localStorage.getItem('access_token')) {
                    var e = localStorage.getItem('user');
                    this.props.recoverUser(e), this.handlePagination(0);
                  }
                },
              },
              {
                key: 'capitalizeFLetter',
                value: function(e) {
                  return e[0].toUpperCase() + e.slice(1);
                },
              },
              {
                key: 'render',
                value: function() {
                  return o.a.createElement(
                    'div',
                    { className: 'app-container' },
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(P, {
                        handleSearch: this.getBooksByWords,
                        searchValue: this.state.searchWords,
                        logout: this.props.handleLogout,
                      }),
                      o.a.createElement(W, {
                        resource: this.state.resource,
                        totalPages: this.state.totalPages,
                        actualPage: this.state.actualPage,
                        getBooksByCity: this.getBooksByCity,
                        getBooksByType: this.getBooksByType,
                        handlePagination: this.handlePagination,
                        setBookToOperate: this.setBookToOperate,
                      }),
                      this.state.lendBook
                        ? o.a.createElement(q, {
                            returnModalBack: this.returnModalBack,
                            book: this.state.bookToOperateIn,
                          })
                        : '',
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        K = Object(g.b)(
          function(e) {
            return { books: e.books };
          },
          function(e) {
            return {
              getBooksPending: function() {
                e((console.log('pensding'), { type: v }));
              },
              getBooksSuccess: function(t) {
                e(
                  (function(e) {
                    return console.log(e), { type: b, payload: { books: e } };
                  })(t),
                );
              },
              getBooksError: function(t) {
                e({ type: E, error: t });
              },
              recoverUser: function(t) {
                e(
                  (function(e) {
                    return { type: k, payload: { user: e } };
                  })(t),
                );
              },
            };
          },
        )(H),
        Y =
          (a(245),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(r)))).state = {
                  username: void 0,
                  password: void 0,
                  message: void 0,
                  message_style: 'messages messages-error',
                }),
                (a.displayNotification = function(e) {
                  a.refs.notificationAlert.notificationAlert({
                    place: 'br',
                    message: o.a.createElement('div', { className: 'notification-container' }, e),
                    type: 'danger',
                    icon: 'now-ui-icons ui-1_bell-53',
                    autoDismiss: 2,
                    closeButton: !1,
                  });
                }),
                (a.authenticate = (function() {
                  var e = Object(w.a)(
                    C.a.mark(function e(t) {
                      var n, o, r, s, l, c, i, u, m;
                      return C.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.preventDefault(),
                                (n = a.state),
                                (o = n.username),
                                (r = n.password),
                                void 0 !== o && void 0 !== r)
                              ) {
                                e.next = 7;
                                break;
                              }
                              a.displayNotification('Primero ingresa credenciales de acceso'),
                                a.setState({ message: 'Primero ingresa credenciales de acceso' }),
                                (e.next = 26);
                              break;
                            case 7:
                              for (c in ((l = []), (s = { username: o, password: r })))
                                (i = encodeURIComponent(c)), (u = encodeURIComponent(s[c])), l.push(i + '=' + u);
                              return (
                                (l = l.join('&')),
                                (e.next = 13),
                                fetch('http://localhost:5000/login', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                  body: l,
                                }).then(function(e) {
                                  return e.json();
                                })
                              );
                            case 13:
                              if (404 !== (m = e.sent).statusCode) {
                                e.next = 20;
                                break;
                              }
                              return (
                                a.setState({ message: m.message }), a.displayNotification(m.message), e.abrupt('return')
                              );
                            case 20:
                              if (!m.access_token) {
                                e.next = 26;
                                break;
                              }
                              return (
                                a.displayNotification('Success'),
                                localStorage.setItem('access_token', m.access_token),
                                localStorage.setItem('user', m.user),
                                (e.next = 26),
                                a.props.handleLogin()
                              );
                            case 26:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (a.handleUsernameChange = function(e) {
                  a.setState({ username: e });
                }),
                (a.handlePasswordChange = function(e) {
                  a.setState({ password: e });
                }),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.state,
                      t = e.username,
                      a = e.password,
                      n = e.message,
                      r = e.message_style;
                    return o.a.createElement(
                      'div',
                      { className: 'full-container' },
                      o.a.createElement(
                        'div',
                        { className: 'container-login' },
                        o.a.createElement(
                          'form',
                          { onSubmit: this.authenticate },
                          o.a.createElement('h1', { className: 'login-title' }, 'Bookshelf Login'),
                          o.a.createElement(
                            'div',
                            { className: 'input' },
                            o.a.createElement(T, {
                              type: 'text',
                              placeholder: 'Username...',
                              iconClasses: 'fas fa-user-circle',
                              value: t,
                              onChange: this.handleUsernameChange,
                            }),
                          ),
                          o.a.createElement(
                            'div',
                            { className: 'input' },
                            o.a.createElement(T, {
                              type: 'password',
                              placeholder: 'Password...',
                              iconClasses: 'fas fa-lock',
                              value: a,
                              onChange: this.handlePasswordChange,
                            }),
                          ),
                          o.a.createElement('input', { type: 'submit', className: 'button-submit', value: 'Login' }),
                          n ? o.a.createElement('span', { className: r }, n) : '',
                        ),
                      ),
                      o.a.createElement(S.a, { ref: 'notificationAlert' }),
                      o.a.createElement(
                        h.b,
                        { to: '/register' },
                        o.a.createElement('button', { className: 'move-button' }, 'Register'),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        J = a(170),
        V = (a(249), a(61)),
        Z =
          (V.object().shape({
            firstName: V.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            lastName: V.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            email: V.string()
              .email('Invalid email')
              .required('Required'),
          }),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (
                ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                  identification: '' | a.props.identification,
                  name: '' | a.props.name,
                  lname: '' | a.props.lname,
                  username: '' | a.props.username,
                  password: '' | a.props.password,
                  age: '' | a.props.age,
                  email: '' | a.props.email,
                }),
                (a.handleSubmit = (function() {
                  var e = Object(w.a)(
                    C.a.mark(function e(t) {
                      return C.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              t.preventDefault();
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    return (
                      console.log(this.props),
                      o.a.createElement(
                        'div',
                        { className: 'full-container' },
                        o.a.createElement(
                          'div',
                          { className: 'container-register' },
                          o.a.createElement('h2', null, 'Register'),
                          o.a.createElement(
                            J.a,
                            {
                              initialValues: { email: '', password: '' },
                              validate: function(e) {
                                var t = {};
                                return (
                                  e.email
                                    ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email) ||
                                      (t.email = 'Invalid email address')
                                    : (t.email = 'Required'),
                                  t
                                );
                              },
                              onSubmit: function(e, t) {
                                var a = t.setSubmitting;
                                setTimeout(function() {
                                  alert(JSON.stringify(e, null, 2)), a(!1);
                                }, 400);
                              },
                            },
                            function(e) {
                              var t = e.values,
                                a = e.errors,
                                n = e.touched,
                                r = e.handleChange,
                                s = e.handleBlur,
                                l = e.handleSubmit,
                                c = e.isSubmitting;
                              return o.a.createElement(
                                'form',
                                { onSubmit: l },
                                o.a.createElement('label', { htmlFor: 'identification' }, 'Identification: '),
                                o.a.createElement('input', {
                                  type: 'text',
                                  name: 'identification',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.identification,
                                }),
                                o.a.createElement('p', null, a.identification && n.identification && a.identification),
                                o.a.createElement('label', { htmlFor: 'name' }, 'Name: '),
                                o.a.createElement('input', {
                                  type: 'text',
                                  name: 'name',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.name,
                                }),
                                o.a.createElement('p', null, a.name && n.name && a.name),
                                o.a.createElement('label', { htmlFor: 'lname' }, 'Last name: '),
                                o.a.createElement('input', {
                                  type: 'text',
                                  name: 'lname',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.lname,
                                }),
                                o.a.createElement('p', null, a.lname && n.lname && a.lname),
                                o.a.createElement('label', { htmlFor: 'username' }, 'Username: '),
                                o.a.createElement('input', {
                                  type: 'text',
                                  name: 'username',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.username,
                                }),
                                o.a.createElement('p', null, a.username && n.username && a.username),
                                o.a.createElement('label', { htmlFor: 'password' }, 'Password: '),
                                o.a.createElement('input', {
                                  type: 'text',
                                  name: 'password',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.password,
                                }),
                                o.a.createElement('p', null, a.password && n.password && a.password),
                                o.a.createElement('label', { htmlFor: 'email' }, 'Age: '),
                                o.a.createElement('input', {
                                  type: 'number',
                                  name: 'age',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.age,
                                }),
                                o.a.createElement('p', null, a.age && n.age && a.age),
                                o.a.createElement('label', { htmlFor: 'email' }, 'Email: '),
                                o.a.createElement('input', {
                                  type: 'email',
                                  name: 'email',
                                  onChange: r,
                                  onBlur: s,
                                  value: t.email,
                                }),
                                o.a.createElement('p', null, a.email && n.email && a.email),
                                o.a.createElement(
                                  'button',
                                  { type: 'submit', className: 'button-register', disabled: c },
                                  'Submit',
                                ),
                              );
                            },
                          ),
                        ),
                        o.a.createElement(
                          h.b,
                          { to: '/login' },
                          o.a.createElement('button', { className: 'move-button' }, 'Go back'),
                        ),
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        $ =
          (a(377),
          (function(e) {
            function t() {
              var e, a;
              Object(l.a)(this, t);
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {}), a;
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    return o.a.createElement(
                      'div',
                      { className: 'full-container' },
                      o.a.createElement(
                        'div',
                        { className: 'not-found-container' },
                        o.a.createElement('h1', null, '404 Page not found'),
                        o.a.createElement('p', null, 'Resource not found'),
                        o.a.createElement(h.b, { to: '/' }, 'Go home'),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        Q = function(e) {
          var t = e.component,
            a = e.loggedIn,
            n = (e.handleLogin, e.handleLogout),
            r = e.path,
            s = Object(p.a)(e, ['component', 'loggedIn', 'handleLogin', 'handleLogout', 'path']);
          return o.a.createElement(
            d.b,
            Object.assign({ path: r }, s, {
              render: function(e) {
                return null !== localStorage.getItem('access_token')
                  ? o.a.createElement(t, Object.assign({}, e, s, { loggedIn: a, handleLogout: n }))
                  : o.a.createElement(
                      d.a,
                      Object.assign({}, e, { to: { pathname: '/login', state: { prevLocation: 'currentLocation' } } }),
                    );
              },
            }),
          );
        },
        X = (function(e) {
          function t() {
            var e, a;
            Object(l.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (
              ((a = Object(i.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = { loggedIn: !1 }),
              (a.handdleLogout = function() {
                localStorage.removeItem('access_token'),
                  a.setState({ loggedIn: !1 }, function() {
                    window.location = '/login';
                  });
              }),
              (a.handleLogin = function() {
                a.setState({ loggedIn: !0 }, function() {
                  window.location = '/';
                });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  localStorage.getItem('access_token') && this.setState({ loggedIn: !0 });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return o.a.createElement(
                    g.a,
                    { store: N },
                    o.a.createElement(
                      'div',
                      { className: 'App' },
                      o.a.createElement(
                        h.a,
                        null,
                        o.a.createElement(
                          d.d,
                          null,
                          o.a.createElement(Q, {
                            path: '/',
                            exact: !0,
                            loggedIn: this.state.loggedIn,
                            handleLogout: this.handdleLogout,
                            component: K,
                          }),
                          o.a.createElement(Q, {
                            path: '/city/:name',
                            loggedIn: this.state.loggedIn,
                            handleLogout: this.handdleLogout,
                            component: K,
                          }),
                          o.a.createElement(Q, {
                            path: '/type/:name',
                            loggedIn: this.state.loggedIn,
                            handleLogout: this.handdleLogout,
                            component: K,
                          }),
                          o.a.createElement(d.b, {
                            path: '/login',
                            render: function(t, a) {
                              return o.a.createElement(Y, Object.assign({ handleLogin: e.handleLogin }, t, a));
                            },
                          }),
                          o.a.createElement(d.b, {
                            path: '/register',
                            render: function(e, t) {
                              return o.a.createElement(Z, Object.assign({}, t, e));
                            },
                          }),
                          o.a.createElement(d.b, { component: $ }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(o.a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      s.a.render(o.a.createElement(X, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[172, 1, 2]],
]);
//# sourceMappingURL=main.20f4764d.chunk.js.map
