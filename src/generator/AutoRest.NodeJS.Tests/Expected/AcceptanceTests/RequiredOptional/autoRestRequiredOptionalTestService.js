/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a AutoRestRequiredOptionalTestService. */
class AutoRestRequiredOptionalTestService extends ServiceClient {
  /**
   * Create a AutoRestRequiredOptionalTestService.
   * @param {string} requiredGlobalPath - number of items to skip
   * @param {string} requiredGlobalQuery - number of items to skip
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
       * @param {number} [options.optionalGlobalQuery] - number of items to skip
   */
  constructor(requiredGlobalPath, requiredGlobalQuery, baseUri, options) {
    if (requiredGlobalPath === null || requiredGlobalPath === undefined) {
      throw new Error('\'requiredGlobalPath\' cannot be null.');
    }
    if (requiredGlobalQuery === null || requiredGlobalQuery === undefined) {
      throw new Error('\'requiredGlobalQuery\' cannot be null.');
    }

    if (!options) options = {};

    super(null, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }
    this.requiredGlobalPath = requiredGlobalPath;
    this.requiredGlobalQuery = requiredGlobalQuery;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.optionalGlobalQuery !== null && options.optionalGlobalQuery !== undefined) {
      this.optionalGlobalQuery = options.optionalGlobalQuery;
    }
    this.implicit = new operations.Implicit(this);
    this.explicit = new operations.Explicit(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = AutoRestRequiredOptionalTestService;
