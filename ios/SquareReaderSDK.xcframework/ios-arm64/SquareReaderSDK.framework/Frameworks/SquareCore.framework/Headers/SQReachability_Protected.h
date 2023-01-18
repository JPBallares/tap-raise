//
//  SQReachability_Protected.h
//  SquareCore
//
//  Created by Alan Fineberg on 4/28/2014
//  Copyright 2014 Square, Inc. All rights reserved.
//

#import <SquareCore/SQReachability.h>


@interface SQReachability ()

/// If YES, `connectedToInternet` will always return YES. Useful in testing or demo environments. Defaults to NO.
/// `connectedToInternetAlwaysReportsYes` will be checked before `connectedToInternetAlwaysReportsNo`.
@property (atomic, assign) BOOL connectedToInternetAlwaysReportsYes;

/// If YES, `connectedToInternet` will always return NO. Useful in testing or demo environments. Defaults to NO.
/// `connectedToInternetAlwaysReportsYes` will be checked before `connectedToInternetAlwaysReportsNo`.
@property (atomic, assign) BOOL connectedToInternetAlwaysReportsNo;

@end
