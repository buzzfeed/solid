/*********************************************************************
 * thread-sleep: Force Node.js to sleep
 *
 * Copyright (c) 2015 Forbes Lindesay
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * MIT License
 ********************************************************************/

#include <nan.h>
#ifdef _WIN32
#include <windows.h>
#else
#include <ctime>
#endif

using v8::FunctionTemplate;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

void SleepSync(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  // expect a number as the first argument
  uint32_t millisec = info[0]->Uint32Value();

#ifdef _WIN32
  Sleep(millisec);
#else
  struct timespec req;
  req.tv_sec = millisec / 1000;
  req.tv_nsec = (millisec % 1000) * 1000000L;
  nanosleep(&req, (struct timespec *)NULL);
#endif

  info.GetReturnValue().Set(millisec);
}

// Expose SleepSync() as sleep() in JS
NAN_MODULE_INIT(InitAll) {
  Set(target, New("sleep").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(SleepSync)).ToLocalChecked());
}

NODE_MODULE(thread_sleep, InitAll)
