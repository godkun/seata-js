/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The enum Registry type.
 *
 * @author godkun
 */
export enum RegistryType {
  /**
   * File registry type.
   */
  File,
  /**
   * ZK registry type.
   */
  ZK,
  /**
   * Redis registry type.
   */
  Redis,
  /**
   * Nacos registry type.
   */
  Nacos,
  /**
   * Eureka registry type.
   */
  Eureka,
  /**
   * Consul registry type
   */
  Consul,
  /**
   * Etcd3 registry type
   */
  Etcd3,
  /**
   * Sofa registry type
   */
  Sofa,
  /**
   * Custom registry type
   */
  Custom,
}

export interface RegistryService {
  /**
   * Register.
   *
   * @param address the address
   */
  register(address: string): void

  /**
   * Unregister.
   *
   * @param address the address
   */
  unregister(address: string): void

  /**
   * Subscribe.
   *
   * @param cluster  the cluster
   * @param listener the listener
   */
  subscribe(cluster: string, listener: any): void

  /**
   * Unsubscribe.
   *
   * @param cluster  the cluster
   * @param listener the listener
   */
  unsubscribe(cluster: string, listener: any): void

  /**
   * Lookup list.
   *
   * @param key the key
   * @return the list
   */
  lookup(key: string): Array<string>

  /**
   * Close.
   */
  close(): void
}

/**
 * the interface registry provider
 * @author godkun
 */
export interface RegistryProvider {
  /**
   * provide a registry implementation instance
   * @return RegistryService
   */
  provide(): RegistryService
}