import type {LoaderFunctionArgs} from '@remix-run/node';
import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";

import {deleteContact} from '../data';

export const action = async ({params}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);

  return redirect('/');
};
