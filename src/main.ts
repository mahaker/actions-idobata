import * as core from '@actions/core';
import https from 'https';
import qs from 'querystring';
import { ClientRequest } from 'http';

async function run() {
  try {

    const msg: string = qs.stringify({
      source: core.getInput('message')
    });

    const req: ClientRequest = https.request(
      core.getInput('hookUrl'),
      {
        method: 'POST',
        headers: {
          'User-Agent': 'post-idobata-ts',
          'Content-Length': msg.length
    		}
      }
    );
    
    req.write(msg);
    req.end();

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
