module.exports = `mutation signup {
  signup(
    data: {
      authType: "apple"
      email: "user1@example.com"
      password: "admin1234"
    }
  ) {
    account {
      id
      email
      dociId
      createdAt
      updatedAt
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}


mutation socialSignup {
  socialSignup(
    data: {
      authType: "apple"
      email: "user1@example.com"
    }
  ) {
    account {
      id
      email
      dociId
      createdAt
      updatedAt
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}

mutation login {
  login(
    data: {
      email: "user1@example.com",
      password: "admin1234",
      authType: "normal"
    }
  ) {
    account {
      id
      dociId
      email
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}

mutation socialLogin {
  socialLogin(
    data: {
      email: "user1@example.com",
      authType: "normal"
    }
  ) {
    account {
      id
      dociId
      email
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}

mutation refreshToken {
  refreshToken {
    account {
      id
      dociId
      email
      isEmailVerified
    }
  }
}

mutation logout {
  logout
}



query findAccount {
  account(id: "<replace with account id>") {
    id
    email
    dociId
    createdAt
    updatedAt
    isEmailVerified
  }
}

query accountCount {
  accountCount
}

mutation verifyEmail {
  verifyEmail(data: {
    email: "felix@doci.io",
    otp: 107413
    }
  ) {
    errors {
      field
      message
    }
    account {
    id
    email
    dociId
    createdAt
    updatedAt
    isEmailVerified
    }
  }
}

mutation updateEmail {
  updateEmail(
    data: {
      email: "sample2@example.com",
      currentPassword: "admin1234"
    }
  ) {
    account {
      id
      email
      dociId
      createdAt
      updatedAt
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}

mutation updatePassword {
  updatePassword(
    data: {
      currentPassword: "admin1234",
      newPassword: "user12345",
      confirmPassword: "user12345"
    }
  ) {
    account {
      id
      email
      dociId
      createdAt
      updatedAt
      isEmailVerified
    }
    errors {
      field
      message
    }
  }
}


mutation deleteAccount {
  deleteAccount {
    errors {
      field
      message
    }
  }
}

`
