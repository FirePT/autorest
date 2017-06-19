/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The product documentation.
 *
 */
class ConstantProduct {
  /**
   * Create a ConstantProduct.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConstantProduct
   *
   * @returns {object} metadata of ConstantProduct
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConstantProduct',
      type: {
        name: 'Composite',
        className: 'ConstantProduct',
        modelProperties: {
          constProperty: {
            required: true,
            isConstant: true,
            serializedName: 'constProperty',
            defaultValue: 'constant',
            type: {
              name: 'String'
            }
          },
          constProperty2: {
            required: true,
            isConstant: true,
            serializedName: 'constProperty2',
            defaultValue: 'constant2',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ConstantProduct;
