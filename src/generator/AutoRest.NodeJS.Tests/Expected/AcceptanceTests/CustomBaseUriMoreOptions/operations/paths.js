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

const msRest = require('ms-rest');
const WebResource = msRest.WebResource;

/**
 * Get a 200 to test a valid base uri
 *
 * @param {string} vault The vault name, e.g. https://myvault
 *
 * @param {string} secret Secret value.
 *
 * @param {string} keyName The key name with value 'key1'.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.keyVersion] The key version. Default value 'v1'.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getEmpty(vault, secret, keyName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let keyVersion = (options && options.keyVersion !== undefined) ? options.keyVersion : 'v1';
  // Validate
  try {
    if (vault === null || vault === undefined || typeof vault.valueOf() !== 'string') {
      throw new Error('vault cannot be null or undefined and it must be of type string.');
    }
    if (secret === null || secret === undefined || typeof secret.valueOf() !== 'string') {
      throw new Error('secret cannot be null or undefined and it must be of type string.');
    }
    if (this.client.dnsSuffix === null || this.client.dnsSuffix === undefined || typeof this.client.dnsSuffix.valueOf() !== 'string') {
      throw new Error('this.client.dnsSuffix cannot be null or undefined and it must be of type string.');
    }
    if (keyName === null || keyName === undefined || typeof keyName.valueOf() !== 'string') {
      throw new Error('keyName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (keyVersion !== null && keyVersion !== undefined && typeof keyVersion.valueOf() !== 'string') {
      throw new Error('keyVersion must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'customuri/{subscriptionId}/{keyName}';
  requestUrl = requestUrl.replace('{vault}', vault);
  requestUrl = requestUrl.replace('{secret}', secret);
  requestUrl = requestUrl.replace('{dnsSuffix}', this.client.dnsSuffix);
  requestUrl = requestUrl.replace('{keyName}', encodeURIComponent(keyName));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  if (keyVersion !== null && keyVersion !== undefined) {
    queryParameters.push('keyVersion=' + encodeURIComponent(keyVersion));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Paths. */
class Paths {
  /**
   * Create a Paths.
   * @param {AutoRestParameterizedCustomHostTestClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._getEmpty = _getEmpty;
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} vault The vault name, e.g. https://myvault
   *
   * @param {string} secret Secret value.
   *
   * @param {string} keyName The key name with value 'key1'.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.keyVersion] The key version. Default value 'v1'.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getEmptyWithHttpOperationResponse(vault, secret, keyName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getEmpty(vault, secret, keyName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} vault The vault name, e.g. https://myvault
   *
   * @param {string} secret Secret value.
   *
   * @param {string} keyName The key name with value 'key1'.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.keyVersion] The key version. Default value 'v1'.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(vault, secret, keyName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getEmpty(vault, secret, keyName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getEmpty(vault, secret, keyName, options, optionalCallback);
    }
  }

}

module.exports = Paths;
