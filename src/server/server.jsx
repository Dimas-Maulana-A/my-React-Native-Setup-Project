import {
  auth,
  baseImage,
  baseLogin,
  baseProduct,
  baseRole,
  baseTransc,
  baseUser,
} from '~utils';

// Server Role
const serverGetRole = () => {
  auth
    .get(baseRole)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverGetRoleId = id => {
  auth
    .get(`${baseRole}${id}`)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverAddRole = data => {
  auth
    .post(baseRole, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverEditRole = (id, data) => {
  auth
    .put(`${baseRole}${id}`, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverDeleteRole = id => {
  auth
    .delete(`${baseRole}${id}`)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

// Server User

const serverGetUser = () => {
  auth
    .get(baseUser)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverGetUserId = id => {
  auth
    .get(`${baseUser}${id}`)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverAddUser = data => {
  auth
    .post(baseUser, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverEditUser = (id, data) => {
  auth
    .put(`${baseUser}${id}`, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverDeleteUser = id => {
  auth
    .delete(`${baseUser}${id}`)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverLoginUser = data => {
  auth
    .post(baseLogin, data)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

// Server Product

const serverGetProduct = () => {
  auth
    .get(baseProduct)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverGetProductId = id => {
  auth
    .get(`${baseProduct}${id}`)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverAddProduct = data => {
  auth
    .post(baseProduct, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverEditProduct = (id, data) => {
  auth
    .put(`${baseProduct}${id}`, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverDeleteProduct = id => {
  auth
    .delete(`${baseProduct}${id}`)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const serverGetImage = img => {
  auth
    .get(`${baseImage}${img}`)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

// Server Transc

const serverGetTransc = () => {
  auth
    .get(baseTransc)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverGetTranscId = id => {
  auth
    .get(`${baseTransc}${id}`)
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
};

const serverAddTransc = data => {
  auth
    .post(baseProduct, data)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

export {
  serverGetRole,
  serverGetRoleId,
  serverAddRole,
  serverEditRole,
  serverDeleteRole,
  serverGetUser,
  serverGetUserId,
  serverAddUser,
  serverEditUser,
  serverDeleteUser,
  serverGetProduct,
  serverGetProductId,
  serverAddProduct,
  serverEditProduct,
  serverDeleteProduct,
  serverGetTransc,
  serverGetTranscId,
  serverAddTransc,
  serverGetImage,
  serverLoginUser,
};
