package com.infiniq.ams.standalone.domain.vo;

import lombok.Getter;

@Getter
public class PagingVo {
    private static final long serialVersionUID = 1L;

    private long totalCount = 0;
    private long pageIndex  = 1;  // 현재 페이지
    private long pageSize   = 100; // 페이지 당 Row 수

    private long pageGroupSize = 5;

    private long pageGroupCount;
    private long nowPageGroup;
    private long nextGroupIndex;

    private long startPage;
    private long endPage;
    private long lastPage;

    public PagingVo(long _totalCount, AbstractPagingRequestVo _pagingInfo) {
        this.totalCount = _totalCount;
        this.pageIndex = _pagingInfo.getPageIndex();
        this.pageSize = _pagingInfo.getPageSize();

        calcPaging();
    }

    public PagingVo(long _totalCount, AbstractPagingRequestVo _pagingInfo, long _pageGroupSize) {
        this.totalCount = _totalCount;
        this.pageIndex = _pagingInfo.getPageIndex();
        this.pageSize = _pagingInfo.getPageSize();
        this.pageGroupSize = _pageGroupSize;

        calcPaging();
    }

    public PagingVo(long _totalCount, long _pageIndex) {
        this.totalCount = _totalCount;
        this.pageIndex = _pageIndex;

        calcPaging();
    }

    public PagingVo(long _totalCount, long _pageIndex, long _pageSize) {
        this.totalCount = _totalCount;
        this.pageIndex = _pageIndex;
        this.pageSize = _pageSize;

        calcPaging();
    }

    public PagingVo(long _totalCount, long _pageIndex, long _pageSize, long _pageGroupSize) {
        this.totalCount = _totalCount;
        this.pageIndex = _pageIndex;
        this.pageSize = _pageSize;
        this.pageGroupSize = _pageGroupSize;

        calcPaging();
    }

    private void calcPaging() {
        this.pageGroupCount = totalCount / (pageSize * pageGroupSize) + (totalCount % (pageSize * pageGroupSize) == 0 ? 0 : 1);
        this.nowPageGroup = (long) Math.ceil((double) pageIndex / pageGroupSize);
        this.startPage = pageGroupSize * (nowPageGroup - 1) + 1;
        this.endPage = startPage + pageGroupSize - 1;

        long _pageCount = totalCount / pageSize + (totalCount % pageSize == 0 ? 0 : 1);
        endPage = endPage > _pageCount ? _pageCount : endPage;

        long _lastPageIndex = totalCount / pageSize;
        _lastPageIndex = totalCount % pageSize == 0 ? _lastPageIndex : _lastPageIndex + 1;

        long _beforeGroupIndex = (nowPageGroup * pageGroupSize) - pageGroupSize;
        _beforeGroupIndex = _beforeGroupIndex < 1 ? 1 : _beforeGroupIndex;

        nextGroupIndex = (nowPageGroup * pageGroupSize) + 1;
        nextGroupIndex = nextGroupIndex > _lastPageIndex ? _lastPageIndex : nextGroupIndex;

        this.lastPage = _lastPageIndex;
    }
}
