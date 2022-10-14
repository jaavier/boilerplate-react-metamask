const abi: Record<string, any>[] = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "employeeWallet",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256"
      }
    ],
    name: "addNew",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "employeeWallet",
        type: "address"
      }
    ],
    name: "banEmployee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "blacklist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "employeeWallet",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "cancel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "check",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "created",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "canceled",
            type: "bool"
          }
        ],
        internalType: "struct Payroll.Payment",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "employees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "firstEmployee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "myTX",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "payments",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "created",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "transactionsList",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

export default abi;
