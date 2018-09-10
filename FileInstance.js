"use strict;"
/*!
 *  Bayrell File System Provider
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof BayrellFileSystem == 'undefined') BayrellFileSystem = {};
BayrellFileSystem.FileInstance = class{
	getClassName(){return "BayrellFileSystem.FileInstance";}
	static getParentClassName(){return "";}
	_init(){
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(BayrellCommon.FileSystem.FileInterface);
	}
	/**
	 * Returns stream
	 */
	getStream(){
	}
	/**
	 * Flush file
	 */
	flush(){
	}
	/**
	 * Close files
	 */
	close(){
	}
}
BayrellFileSystem.FileInstance.__static_implements__ = [];
BayrellFileSystem.FileInstance.__static_implements__.push(BayrellCommon.FileSystem.FileInterface)