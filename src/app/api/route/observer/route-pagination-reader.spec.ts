import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { RoutePaginationReader } from './route-pagination-reader';

describe('RoutePaginationReader', () => {
  let reader: RoutePaginationReader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    reader = new RoutePaginationReader();
  });

  it('provides no pagination when there is no pagination parameters', () => {
    const params = convertToParamMap({});
    const request = reader.readPagination(params);
    expect(request).toBeUndefined();
  });

  it('should be able to parse pagination when all parameters are provided', () => {
    const params = convertToParamMap({ page: '1', size: '2' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.page).toEqual(1);
    expect(request?.size).toEqual(2);
  });

  it('should be able to parse pagination when only the page is provided', () => {
    const params = convertToParamMap({ page: '1' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.page).toEqual(1);
    expect(request?.size).toBeUndefined();
  });

  it('should be able to parse pagination when the page is zero', () => {
    const params = convertToParamMap({ page: '0', size: '2' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.page).toEqual(0);
    expect(request?.size).toEqual(2);
  });

  it('should be able to parse pagination when the size is zero', () => {
    const params = convertToParamMap({ page: '1', size: '0' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.page).toEqual(1);
    expect(request?.size).toEqual(0);
  });

  it('should be able to parse pagination when the page and size are zero', () => {
    const params = convertToParamMap({ page: '0', size: '0' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.page).toEqual(0);
    expect(request?.size).toEqual(0);
  });

  it('should be able to parse sort', () => {
    const params = convertToParamMap({ sort: 'property,asc' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.sort).not.toBeUndefined();
    expect(request?.sort?.length).toEqual(1);
    if (request?.sort) {
      expect(request.sort[0].property).toEqual('property');
      expect(request.sort[0].order).toEqual('asc');
    }
  });

  it('should be able to parse sort with default direction when no direction is provided', () => {
    const params = convertToParamMap({ sort: 'property' });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.sort).not.toBeUndefined();
    expect(request?.sort?.length).toEqual(1);
    if (request?.sort) {
      expect(request.sort[0].property).toEqual('property');
      expect(request.sort[0].order).toEqual('asc');
    }
  });

  it('should be able to parse multiple sorts', () => {
    const params = convertToParamMap({ sort: ['property1,asc', 'property2,desc'] });
    const request = reader.readPagination(params);
    expect(request).not.toBeUndefined();
    expect(request?.sort).not.toBeUndefined();
    expect(request?.sort?.length).toEqual(2);
    if (request?.sort) {
      expect(request.sort[0].property).toEqual('property1');
      expect(request.sort[0].order).toEqual('asc');
      expect(request.sort[1].property).toEqual('property2');
      expect(request.sort[1].order).toEqual('desc');
    }
  });

});
