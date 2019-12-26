/*!
 * Rule the words! KKuTu Online
 * Copyright (C) 2020  JJoriping(op@jjo.kr)
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { getProjectData, SETTINGS } from "./System";

export const SSL_OPTIONS = SETTINGS.https && ('pfx' in SETTINGS.https
  ? {
    pfx: getProjectData(SETTINGS.https.pfx)
  }
  : {
    cert: getProjectData(SETTINGS.https.cert),
    key: getProjectData(SETTINGS.https.key),
    ca: getProjectData(SETTINGS.https.ca)
  }
);
