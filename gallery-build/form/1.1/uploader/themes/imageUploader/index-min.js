KISSY.add("gallery/form/1.1/uploader/themes/imageUploader/index",function(f,h,i){function g(a){g.superclass.constructor.call(this,a)}var e=h.all;f.extend(g,i,{afterUploaderRender:function(a){var c=new (this.get("oPlugin").preview),b=this.get("queue");this.set("preview",c);this._maxHideBtn(a);this._renderFiledrop();b.on("add",this._addFileHandler,this)},_addFileHandler:function(a){a=a.file;var c=a.target,b=e(".J_Del_"+a.id),d=e(".J_Mask_"+a.id);c.on("mouseover mouseout",function(j){if(j.type=="mouseover"){b.show();
d.show()}else{b.hide();d.hide()}});b.data("data-file",a);b.on("click",this._delHandler,this)},_getStatusWrapper:function(a){return a.children(".J_FileStatus")},_renderFiledrop:function(){var a=this.get("button").get("target");a=new (this.get("oPlugin").filedrop)({target:a,uploader:this.get("uploader"),tpl:{supportDrop:'<div class="drop-wrapper"></div>'}});a.render();return a},_waitingHandler:function(a){var c=this.get("preview"),b=a.file,d=b.input;b=e(".J_Pic_"+b.id);c&&d&&b.length&&c.preview(a.file.input,
b)},_startHandler:function(a){var c=a.uploader,b=a.index,d=this.get("queue");c=c.get("type");a=e(".J_ProgressBar_"+a.id);if(c=="ajax"||c=="flash"){a=new (this.get("oPlugin").progressBar)(a);a.render();this.set("progressBar",a);d.updateFile(b,{progressBar:a})}},_progressHandler:function(a){var c=a.file.progressBar;if(!c)return false;c.set("value",Math.ceil(a.loaded/a.total)*100)},_successHandler:function(a){var c=a.file.result;this._setCount();c&&this._changeImageSrc(a.id,c);this._setDisplayMsg(false,
a.file)},_errorHandler:function(a){var c=a.msg;e(".J_ErrorMsg_"+a.id).html(c);this._setDisplayMsg(true,a.file);f.log(c)},_setCount:function(){var a=e(this.get("elCount")),c=this.getFilesLen(),b=this.get("auth");if(!a.length||!b)return false;b=b.get("rules").max;if(!b)return false;a.text(b[0]-c)},_setDisplayMsg:function(a,c){if(!c)return false;var b=e(".J_Mask_"+c.id),d=c.statusWrapper;b[a&&"show"||"hide"]();if(a){b.show();d.show()}else{b.hide();d.hide()}},_maxHideBtn:function(a){this.get("auth").on("error",
function(c){c=c.rule;var b=a.get("button"),d=b.get("target");if(c=="max"){b.hide();d.parent("li").hide()}})},_delHandler:function(a){var c=this.get("uploader"),b=this.get("queue");a=e(a.target).data("data-file");b=b.getFileIndex(a.id);a=a.status;if(a=="start"||a=="progress")c.cancel(b);this._setCount()},getFilesLen:function(a){a||(a="success");return this.get("queue").getFiles(a).length},_changeImageSrc:function(a,c){var b=c.data,d=e(".J_Pic_"+a);if(!f.isObject(b))return false;b=b.url;if(d.attr("src")==
""||f.UA.ie==8)d.attr("src",b)}},{ATTRS:{name:{value:"imageUploader"},isUseCss:{value:true},cssUrl:{value:"gallery/form/1.1/uploader/themes/imageUploader/style.css"},fileTpl:{value:'<li id="queue-file-{id}" class="clearfix" data-name="{name}"><div class="tb-pic120"><a href="javascript:void(0);"><img class="J_Pic_{id}" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper J_FileStatus"><div class="status waiting-status tips-upload-waiting"><p class="tips-text">等待上传，请稍候</p></div><div class="status start-status progress-status tips-uploading"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>上传中...</div></div><div class="status success-status tips-upload-success">上传成功！</div><div class="status error-status tips-upload-error"><p class="J_ErrorMsg_{id} tips-text">上传失败，请重试！</p></div></div><a class="J_Del_{id} del-pic" href="#">删除</a></li>'},
plugins:{value:["preview","progressBar","filedrop"]},elCount:{value:"#J_UploadCount"}}});return g},{requires:["node","../../theme"]});