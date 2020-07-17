module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clienteAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:4000"
});
/* harmony default export */ __webpack_exports__["default"] = (clienteAxios);

/***/ }),

/***/ "./config/tokenAuth.js":
/*!*****************************!*\
  !*** ./config/tokenAuth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./config/axios.js");


const tokenAuth = token => {
  if (token) {
    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tokenAuth);

/***/ }),

/***/ "./context/app/appContext.js":
/*!***********************************!*\
  !*** ./context/app/appContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (appContext);

/***/ }),

/***/ "./context/app/appReducer.js":
/*!***********************************!*\
  !*** ./context/app/appReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["MOSTRAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cargando: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        nombre: action.payload.nombre,
        nombre_original: action.payload.nombre_original,
        cargando: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload,
        cargando: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CREAR_ENLACE_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        url: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: null,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_PASSWORD"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        password: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_DESCARGAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        descargas: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/app/appState.js":
/*!*********************************!*\
  !*** ./context/app/appState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appContext */ "./context/app/appContext.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ "./context/app/appReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
var _jsxFileName = "C:\\Users\\A308244\\Desktop\\Proyectos\\React\\curso-react\\Proyecto NodeSend\\nodesend-cliente\\context\\app\\appState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AppState = ({
  children
}) => {
  const initialState = {
    mensaje_archivo: null,
    nombre: '',
    nombre_original: '',
    cargando: null,
    descargas: 1,
    password: '',
    autor: null,
    url: ''
  }; // Crear dispatch y state

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_appReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Muestra una alerta 

  const mostrarAlerta = msg => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["MOSTRAR_ALERTA"],
      payload: msg
    });
    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3001);
  }; // Sube los archivos al servidor


  const subirArchivo = async (formData, nombreArchivo) => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO"]
    });

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/archivos', formData);
      console.log(resultado.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO_EXITO"],
        payload: {
          nombre: resultado.data.archivo,
          nombre_original: nombreArchivo
        }
      });
    } catch (error) {
      // console.log(error);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // crea un enlace una vez que se subió el archivo


  const crearEnlace = async () => {
    const data = {
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor
    }; // console.log(data);

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/enlaces', data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["CREAR_ENLACE_EXITO"],
        payload: resultado.data.msg
      });
    } catch (error) {
      console.log(error);
    }
  };

  const limpiarState = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["LIMPIAR_STATE"]
    });
  }; // Agregue el password


  const agregarPassword = password => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_PASSWORD"],
      payload: password
    });
  }; // agrega un número de descargas


  const agregarDescargas = descargas => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_DESCARGAS"],
      payload: descargas
    });
  };

  return __jsx(_appContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      mensaje_archivo: state.mensaje_archivo,
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      cargando: state.cargando,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor,
      url: state.url,
      mostrarAlerta,
      subirArchivo,
      crearEnlace,
      limpiarState,
      agregarPassword,
      agregarDescargas
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppState);

/***/ }),

/***/ "./context/auth/authContext.js":
/*!*************************************!*\
  !*** ./context/auth/authContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (authContext);

/***/ }),

/***/ "./context/auth/authReducer.js":
/*!*************************************!*\
  !*** ./context/auth/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_EXITOSO"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_ERROR"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_EXITOSO"]:
      localStorage.setItem('token', action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USUARIO_AUTENTICADO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CERRAR_SESION"]:
      localStorage.removeItem('token');
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        token: null,
        autenticado: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/auth/authState.js":
/*!***********************************!*\
  !*** ./context/auth/authState.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");
var _jsxFileName = "C:\\Users\\A308244\\Desktop\\Proyectos\\React\\curso-react\\Proyecto NodeSend\\nodesend-cliente\\context\\auth\\authState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AuthState = ({
  children
}) => {
  // Definir un state inicial
  const initialState = {
    token: false ? undefined : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: null
  }; // Definir el reducer

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Registrar nuevos usuarios

  const registrarUsuario = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/usuarios', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: respuesta.data.msg
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Autenticar Usuarios


  const iniciarSesion = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/auth', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_EXITOSO"],
        payload: respuesta.data.token
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Retorne el Usuario autenticado en base al JWT


  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
    }

    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/auth');

      if (respuesta.data.usuario) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_3__["USUARIO_AUTENTICADO"],
          payload: respuesta.data.usuario
        });
      }
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Cerrar la sesión


  const cerrarSesion = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CERRAR_SESION"]
    });
  };

  return __jsx(_authContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      cargando: state.cargando,
      registrarUsuario,
      iniciarSesion,
      usuarioAutenticado,
      cerrarSesion
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
var _jsxFileName = "C:\\Users\\A308244\\Desktop\\Proyectos\\React\\curso-react\\Proyecto NodeSend\\nodesend-cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, SUBIR_ARCHIVO, SUBIR_ARCHIVO_EXITO, SUBIR_ARCHIVO_ERROR, CREAR_ENLACE_EXITO, CREAR_ENLACE_ERROR, LIMPIAR_STATE, AGREGAR_PASSWORD, AGREGAR_DESCARGAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_EXITOSO", function() { return REGISTRO_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_ERROR", function() { return REGISTRO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXITOSO", function() { return LOGIN_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO_AUTENTICADO", function() { return USUARIO_AUTENTICADO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERRAR_SESION", function() { return CERRAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOSTRAR_ALERTA", function() { return MOSTRAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO", function() { return SUBIR_ARCHIVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_EXITO", function() { return SUBIR_ARCHIVO_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_ERROR", function() { return SUBIR_ARCHIVO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_EXITO", function() { return CREAR_ENLACE_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_ERROR", function() { return CREAR_ENLACE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_STATE", function() { return LIMPIAR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_PASSWORD", function() { return AGREGAR_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_DESCARGAS", function() { return AGREGAR_DESCARGAS; });
const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
const REGISTRO_ERROR = 'REGISTRO_ERROR';
const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const CERRAR_SESION = 'CERRAR_SESION';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const SUBIR_ARCHIVO = 'SUBIR_ARCHIVO';
const SUBIR_ARCHIVO_EXITO = 'SUBIR_ARCHIVO_EXITO';
const SUBIR_ARCHIVO_ERROR = 'SUBIR_ARCHIVO_ERROR';
const CREAR_ENLACE_EXITO = 'CREAR_ENLACE_EXITO';
const CREAR_ENLACE_ERROR = 'CREAR_ENLACE_ERROR';
const LIMPIAR_STATE = 'LIMPIAR_STATE';
const AGREGAR_PASSWORD = 'AGREGAR_PASSWORD';
const AGREGAR_DESCARGAS = 'AGREGAR_DESCARGAS';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInRva2VuQXV0aCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJNT1NUUkFSX0FMRVJUQSIsIm1lbnNhamVfYXJjaGl2byIsInBheWxvYWQiLCJPQ1VMVEFSX0FMRVJUQSIsIlNVQklSX0FSQ0hJVk8iLCJjYXJnYW5kbyIsIlNVQklSX0FSQ0hJVk9fRVhJVE8iLCJub21icmUiLCJub21icmVfb3JpZ2luYWwiLCJTVUJJUl9BUkNISVZPX0VSUk9SIiwiQ1JFQVJfRU5MQUNFX0VYSVRPIiwidXJsIiwiTElNUElBUl9TVEFURSIsImRlc2NhcmdhcyIsInBhc3N3b3JkIiwiYXV0b3IiLCJBR1JFR0FSX1BBU1NXT1JEIiwiQUdSRUdBUl9ERVNDQVJHQVMiLCJBcHBTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYXBwUmVkdWNlciIsIm1vc3RyYXJBbGVydGEiLCJtc2ciLCJzZXRUaW1lb3V0Iiwic3ViaXJBcmNoaXZvIiwiZm9ybURhdGEiLCJub21icmVBcmNoaXZvIiwicmVzdWx0YWRvIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYXJjaGl2byIsImVycm9yIiwicmVzcG9uc2UiLCJjcmVhckVubGFjZSIsImxpbXBpYXJTdGF0ZSIsImFncmVnYXJQYXNzd29yZCIsImFncmVnYXJEZXNjYXJnYXMiLCJhdXRoQ29udGV4dCIsIlJFR0lTVFJPX0VYSVRPU08iLCJSRUdJU1RST19FUlJPUiIsIkxPR0lOX0VSUk9SIiwibWVuc2FqZSIsIkxPR0lOX0VYSVRPU08iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJVU1VBUklPX0FVVEVOVElDQURPIiwidXN1YXJpbyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJpbmljaWFyU2VzaW9uIiwidXN1YXJpb0F1dGVudGljYWRvIiwiZ2V0SXRlbSIsImdldCIsImNlcnJhclNlc2lvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQ1JFQVJfRU5MQUNFX0VSUk9SIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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LGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1yRCxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUcsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU0wRCxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxNQUFNeEQsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTUksZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJQLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgY2xpZW50ZUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5iYWNrZW5kVVJMXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50ZUF4aW9zOyIsImltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi9heGlvcyc7XG5cbmNvbnN0IHRva2VuQXV0aCA9IHRva2VuID0+IHtcbiAgICBpZih0b2tlbikge1xuICAgICAgICBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRva2VuQXV0aDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBDb250ZXh0OyIsImltcG9ydCB7XG4gICAgTU9TVFJBUl9BTEVSVEEsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgU1VCSVJfQVJDSElWTyxcbiAgICBTVUJJUl9BUkNISVZPX0VYSVRPLFxuICAgIFNVQklSX0FSQ0hJVk9fRVJST1IsXG4gICAgQ1JFQVJfRU5MQUNFX0VYSVRPLFxuICAgIENSRUFSX0VOTEFDRV9FUlJPUixcbiAgICBMSU1QSUFSX1NUQVRFLFxuICAgIEFHUkVHQVJfUEFTU1dPUkQsXG4gICAgQUdSRUdBUl9ERVNDQVJHQVNcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIE1PU1RSQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNVQklSX0FSQ0hJVk86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNVQklSX0FSQ0hJVk9fRVhJVE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICBub21icmU6IGFjdGlvbi5wYXlsb2FkLm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiBhY3Rpb24ucGF5bG9hZC5ub21icmVfb3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNVQklSX0FSQ0hJVk9fRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ1JFQVJfRU5MQUNFX0VYSVRPOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1cmw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgTElNUElBUl9TVEFURTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBudWxsLFxuICAgICAgICAgICAgICAgIG5vbWJyZTogJycsXG4gICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOicnLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBudWxsLFxuICAgICAgICAgICAgICAgIGRlc2NhcmdhczogMSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgYXV0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEFHUkVHQVJfUEFTU1dPUkQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEFHUkVHQVJfREVTQ0FSR0FTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkZXNjYXJnYXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIFNVQklSX0FSQ0hJVk8sXG4gICAgU1VCSVJfQVJDSElWT19FWElUTyxcbiAgICBTVUJJUl9BUkNISVZPX0VSUk9SLFxuICAgIENSRUFSX0VOTEFDRV9FWElUTyxcbiAgICBDUkVBUl9FTkxBQ0VfRVJST1IsXG4gICAgTElNUElBUl9TVEFURSxcbiAgICBBR1JFR0FSX1BBU1NXT1JELFxuICAgIEFHUkVHQVJfREVTQ0FSR0FTXG59IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcblxuY29uc3QgQXBwU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgIG5vbWJyZTogJycsXG4gICAgICAgIG5vbWJyZV9vcmlnaW5hbDonJyxcbiAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgIGRlc2NhcmdhczogMSxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgdXJsOiAnJ1xuICAgIH1cblxuICAgIC8vIENyZWFyIGRpc3BhdGNoIHkgc3RhdGVcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIE11ZXN0cmEgdW5hIGFsZXJ0YSBcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gbXNnID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTU9TVFJBUl9BTEVSVEEsXG4gICAgICAgICAgICBwYXlsb2FkOiBtc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDEpO1xuICAgIH1cblxuICAgIC8vIFN1YmUgbG9zIGFyY2hpdm9zIGFsIHNlcnZpZG9yXG4gICAgY29uc3Qgc3ViaXJBcmNoaXZvID0gYXN5bmMgKGZvcm1EYXRhLCBub21icmVBcmNoaXZvKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBTVUJJUl9BUkNISVZPXG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2FyY2hpdm9zJywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvLmRhdGEpOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCSVJfQVJDSElWT19FWElUTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTogcmVzdWx0YWRvLmRhdGEuYXJjaGl2byxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiBub21icmVBcmNoaXZvXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFNVQklSX0FSQ0hJVk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjcmVhIHVuIGVubGFjZSB1bmEgdmV6IHF1ZSBzZSBzdWJpw7MgZWwgYXJjaGl2b1xuICAgIGNvbnN0IGNyZWFyRW5sYWNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbm9tYnJlOiBzdGF0ZS5ub21icmUsXG4gICAgICAgICAgICBub21icmVfb3JpZ2luYWw6IHN0YXRlLm5vbWJyZV9vcmlnaW5hbCxcbiAgICAgICAgICAgIGRlc2Nhcmdhczogc3RhdGUuZGVzY2FyZ2FzLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b3I6IHN0YXRlLmF1dG9yXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2VubGFjZXMnLCBkYXRhKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBDUkVBUl9FTkxBQ0VfRVhJVE8sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEubXNnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpbXBpYXJTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTElNUElBUl9TVEFURVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEFncmVndWUgZWwgcGFzc3dvcmRcbiAgICBjb25zdCBhZ3JlZ2FyUGFzc3dvcmQgPSBwYXNzd29yZCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXNzd29yZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFncmVnYSB1biBuw7ptZXJvIGRlIGRlc2Nhcmdhc1xuICAgIGNvbnN0IGFncmVnYXJEZXNjYXJnYXMgPSBkZXNjYXJnYXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBR1JFR0FSX0RFU0NBUkdBUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IGRlc2Nhcmdhc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogc3RhdGUubWVuc2FqZV9hcmNoaXZvLFxuICAgICAgICAgICAgICAgIG5vbWJyZTogc3RhdGUubm9tYnJlLFxuICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogc3RhdGUubm9tYnJlX29yaWdpbmFsLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICBkZXNjYXJnYXM6IHN0YXRlLmRlc2NhcmdhcyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYXV0b3I6IHN0YXRlLmF1dG9yLFxuICAgICAgICAgICAgICAgIHVybDogc3RhdGUudXJsLFxuICAgICAgICAgICAgICAgIG1vc3RyYXJBbGVydGEsXG4gICAgICAgICAgICAgICAgc3ViaXJBcmNoaXZvLFxuICAgICAgICAgICAgICAgIGNyZWFyRW5sYWNlLFxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZSxcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYWdyZWdhckRlc2Nhcmdhc1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcbiAgICAgICAgY2FzZSBSRUdJU1RST19FUlJPUjpcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIGNhc2UgTE9HSU5fRVhJVE9TTzogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5cblxuaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTywgXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgdG9rZW5BdXRoIGZyb20gJy4uLy4uL2NvbmZpZy90b2tlbkF1dGgnO1xuXG5jb25zdCBBdXRoU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgLy8gRGVmaW5pciB1biBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnLFxuICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcbiAgICAgICAgY2FyZ2FuZG86IG51bGxcbiAgICB9XG5cbiAgICAvLyBEZWZpbmlyIGVsIHJlZHVjZXJcbiAgICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlUmVkdWNlcihhdXRoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIFJlZ2lzdHJhciBudWV2b3MgdXN1YXJpb3NcbiAgICBjb25zdCByZWdpc3RyYXJVc3VhcmlvID0gYXN5bmMgZGF0b3MgPT4ge1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL3VzdWFyaW9zJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEubXNnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIFJldG9ybmUgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxuICAgIGNvbnN0IHVzdWFyaW9BdXRlbnRpY2FkbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2F1dGgnKTtcbiAgICAgICAgICAgIGlmKHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW8pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW9cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2VycmFyIGxhIHNlc2nDs25cbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENFUlJBUl9TRVNJT05cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2Fkbzogc3RhdGUuYXV0ZW50aWNhZG8sXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogc3RhdGUudXN1YXJpbyxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvLFxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXG4gICAgICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvLCBcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTdGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlJztcbmltcG9ydCBBcHBTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBTdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoU3RhdGU+XG4gICAgICAgICAgICA8QXBwU3RhdGU+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9BcHBTdGF0ZT5cbiAgICAgICAgPC9BdXRoU3RhdGU+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VYSVRPU08gPSAnUkVHSVNUUk9fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgUkVHSVNUUk9fRVJST1IgPSAnUkVHSVNUUk9fRVJST1InO1xuXG5leHBvcnQgY29uc3QgTE9HSU5fRVhJVE9TTyA9ICdMT0dJTl9FWElUT1NPJztcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9ICdMT0dJTl9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBVU1VBUklPX0FVVEVOVElDQURPID0gJ1VTVUFSSU9fQVVURU5USUNBRE8nO1xuZXhwb3J0IGNvbnN0IENFUlJBUl9TRVNJT04gPSAnQ0VSUkFSX1NFU0lPTidcblxuZXhwb3J0IGNvbnN0IE1PU1RSQVJfQUxFUlRBID0gJ01PU1RSQVJfQUxFUlRBJztcbmV4cG9ydCBjb25zdCBPQ1VMVEFSX0FMRVJUQSA9ICdPQ1VMVEFSX0FMRVJUQSc7XG5cbmV4cG9ydCBjb25zdCBTVUJJUl9BUkNISVZPID0gJ1NVQklSX0FSQ0hJVk8nO1xuZXhwb3J0IGNvbnN0IFNVQklSX0FSQ0hJVk9fRVhJVE8gPSAnU1VCSVJfQVJDSElWT19FWElUTyc7XG5leHBvcnQgY29uc3QgU1VCSVJfQVJDSElWT19FUlJPUiA9ICdTVUJJUl9BUkNISVZPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IENSRUFSX0VOTEFDRV9FWElUTyA9ICdDUkVBUl9FTkxBQ0VfRVhJVE8nO1xuZXhwb3J0IGNvbnN0IENSRUFSX0VOTEFDRV9FUlJPUiA9ICdDUkVBUl9FTkxBQ0VfRVJST1InO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcblxuZXhwb3J0IGNvbnN0IEFHUkVHQVJfUEFTU1dPUkQgPSAnQUdSRUdBUl9QQVNTV09SRCc7XG5leHBvcnQgY29uc3QgQUdSRUdBUl9ERVNDQVJHQVMgPSAnQUdSRUdBUl9ERVNDQVJHQVMnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=